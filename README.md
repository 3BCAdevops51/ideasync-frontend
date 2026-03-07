# IdeaSync Frontend

Frontend application for **IdeaSync**, built with a modern JavaScript framework and containerized using Docker.
This project also includes a complete **CI pipeline with GitHub Actions**, **code quality analysis**, and **Docker image publishing**.

---

## 🚀 Tech Stack

* Frontend Framework: React / Vite
* Containerization: Docker
* CI/CD: GitHub Actions
* Code Quality: SonarCloud
* Web Server: Nginx

---

## 📂 Project Structure

```
ideasync-frontend
│
├── src/                 # Application source code
├── public/              # Static assets
├── Dockerfile           # Docker configuration for containerizing the app
├── package.json         # Node dependencies
└── .github/workflows/
       frontend-ci.yml   # CI pipeline configuration
```

---

## ⚙️ Features Implemented

### 1️⃣ Frontend Application

* Built using modern JavaScript framework
* Modular component structure
* Responsive UI

---

### 2️⃣ Docker Containerization

The application is containerized using **Docker**.

**Dockerfile Overview**

* Multi-stage build
* Node.js used for building the application
* Nginx used to serve the static build files

Build Image:

```bash
docker build -t ideasync-frontend .
```

Run Container:

```bash
docker run -p 80:80 ideasync-frontend
```

---

### 3️⃣ CI Pipeline with GitHub Actions

A CI workflow is configured to automatically run when code is pushed.

Pipeline Steps:

1. Checkout source code
2. Install dependencies
3. Build frontend project
4. Run SonarCloud code analysis
5. Build Docker image
6. Push Docker image to Docker Hub

Workflow File:

```
.github/workflows/frontend-ci.yml
```

---

### 4️⃣ Code Quality Analysis

Code quality is analyzed using **SonarCloud**.

Metrics checked:

* Bugs
* Vulnerabilities
* Code Smells
* Maintainability

This analysis runs automatically in the CI pipeline.

---

### 5️⃣ Docker Image Publishing

After successful build, the pipeline automatically pushes the Docker image to Docker Hub.

Example Image:

```
dockerhub-username/ideasync-frontend:latest
```

---

## 🔐 GitHub Secrets Used

The CI pipeline uses secure secrets stored in GitHub:

* `DOCKER_USERNAME`
* `DOCKER_PASSWORD`
* `SONAR_TOKEN`

---

## ▶️ Running Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

---

## 📦 Deployment Architecture

```
Developer Push
       ↓
GitHub Repository
       ↓
GitHub Actions CI Pipeline
       ↓
SonarCloud Code Quality Check
       ↓
Docker Image Build
       ↓
Docker Hub Push
```

---

## 👩‍💻 Author

Sakthi Meera
DevOps / Cloud Enthusiast
