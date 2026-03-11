import { useEffect, useState } from 'react'
import './App.css'

const API = 'http://localhost:8080/ideas'

interface Idea {
  id: number
  title: string
  description: string
  submittedBy: string
  status: string
}

export default function App() {
  const [username, setUsername] = useState<string | null>(localStorage.getItem('username'))
  const [role, setRole] = useState<string | null>(localStorage.getItem('role'))
  const [loginUser, setLoginUser] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [loginRole, setLoginRole] = useState('MEMBER')
  const [error, setError] = useState('')

  const [ideas, setIdeas] = useState<Idea[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (username && role) loadIdeas()
  }, [username, role])

  function login() {
    setError('')
    const u = loginUser.trim()
    const p = loginPass.trim()
    if (!u || !p) {
      setError('All fields are required')
      return
    }
    if (u !== p) {
      setError('Invalid username or password')
      return
    }
    localStorage.setItem('username', u)
    localStorage.setItem('role', loginRole)
    setUsername(u)
    setRole(loginRole)
  }

  function logout() {
    localStorage.clear()
    setUsername(null)
    setRole(null)
    setIdeas([])
  }

  async function loadIdeas() {
    try {
      const res = await fetch(API)
      if (!res.ok) throw new Error('Failed to load ideas')
      const data: Idea[] = await res.json()
      // MEMBER sees only own ideas
      if (role === 'MEMBER' && username) {
        setIdeas(data.filter(i => i.submittedBy === username))
      } else {
        setIdeas(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function createIdea() {
    if (role !== 'MEMBER' || !username) return

    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, submittedBy: username })
    })
    setTitle('')
    setDescription('')
    loadIdeas()
  }

  async function updateStatus(id: number, status: string) {
    await fetch(`${API}/${id}/status?status=${status}`, { method: 'PUT' })
    loadIdeas()
  }

  async function deleteIdea(id: number) {
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    loadIdeas()
  }

  // If not logged in show login
  if (!username || !role) {
    return (
      <div className="login-body">
        <div className="login-card">
          <h2>IdeaSync</h2>
          <p className="subtitle">Academic Collaboration Portal</p>

          <input
            placeholder="Username"
            value={loginUser}
            onChange={e => setLoginUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPass}
            onChange={e => setLoginPass(e.target.value)}
          />

          <select value={loginRole} onChange={e => setLoginRole(e.target.value)}>
            <option value="MEMBER">Team Member</option>
            <option value="LEADER">Team Leader</option>
          </select>

          <button onClick={login}>Login</button>

          <p className="note">Password must be same as username</p>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    )
  }
//new command
  // Logged in view
  return (
    <div>
      <div className="header">
        <h1>IdeaSync</h1>
        <div className="user-info">
          <span>Logged in as: <b>{username}</b></span>
          <span>Role: <b>{role}</b></span>
          <button className="btn logout" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="container">
        {/* MEMBER ONLY */}
        {role === 'MEMBER' && (
          <div id="submitSectionWrapper">
            <h2 id="submitSectionTitle">Submit New Idea</h2>
            <div id="submitSection" className="card">
              <input placeholder="Project Title" value={title} onChange={e => setTitle(e.target.value)} />
              <textarea placeholder="Project Description" value={description} onChange={e => setDescription(e.target.value)} />
              <button className="btn primary" onClick={createIdea}>Submit Idea</button>
            </div>
          </div>
        )}

        <h2 className="section-title">All Ideas</h2>

        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Submitted By</th>
                <th>Status</th>
                <th style={{ display: role === 'LEADER' ? 'table-cell' : 'none' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map(idea => (
                <tr key={idea.id}>
                  <td>{idea.title}</td>
                  <td>{idea.description}</td>
                  <td>{idea.submittedBy}</td>
                  <td>{idea.status}</td>
                  <td style={{ display: role === 'LEADER' ? 'table-cell' : 'none' }}>
                    {role === 'LEADER' && (
                      <>
                        <button className="btn-success" onClick={() => updateStatus(idea.id, 'ACCEPTED')}>Accept</button>
                        <button className="btn-error" onClick={() => updateStatus(idea.id, 'REJECTED')}>Reject</button>
                        <button onClick={() => deleteIdea(idea.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
