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
<img width="779" height="512" alt="Screenshot (51)" src="https://github.com/user-attachments/assets/2a47841a-2cdb-431d-9ec8-0c3bd4fa4a93" />

### 5️⃣ Docker Image Publishing

After successful build, the pipeline automatically pushes the Docker image to Docker Hub.

Example Image:

```
dockerhub-username/ideasync-frontend:latest
```

---
<img width="1366" height="768" alt="Screenshot (54)" src="https://github.com/user-attachments/assets/a083c87b-0bc9-4819-acfe-f77f5adc3dd9" />

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

🌐 Live Deployment

The frontend application is deployed using Vercel.

Live URL:

https://ideasync-frontend.vercel.app/

Deployment Features:

Automatic deployment on every push to main branch

Global CDN delivery

Fast static hosting

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
