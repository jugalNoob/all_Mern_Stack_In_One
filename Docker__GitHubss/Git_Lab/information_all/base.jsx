🔹 Basic Use Case: Deploying a MERN App with GitLab CI/CD

Imagine you built a MERN app (React frontend + Node.js backend + MongoDB).
You want:

✅ Every time you push code → GitLab should automatically test it.

✅ If tests pass → build the React app.

✅ If build works → deploy to a server (staging/prod).

🏗 Example Setup
1. Project Structure
/mern-app
   /frontend  → React app
   /backend   → Node.js + Express
   .gitlab-ci.yml

2. Basic .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

# Test Backend
test_backend:
  stage: test
  image: node:18
  script:
    - cd backend
    - npm install
    - npm test

# Test Frontend
test_frontend:
  stage: test
  image: node:18
  script:
    - cd frontend
    - npm install
    - npm test

# Build React App
build_frontend:
  stage: build
  image: node:18
  script:
    - cd frontend
    - npm install
    - npm run build
  artifacts:
    paths:
      - frontend/build/

# Deploy (simple SSH)
deploy_prod:
  stage: deploy
  script:
    - echo "Deploying MERN app..."
    - ssh user@server "cd /var/www/mern-app && git pull && npm install && pm2 restart all"
  environment:
    name: production
    url: https://myapp.com
  when: manual
  only:
    - main

⚙️ How this pipeline works

Run tests:

Installs dependencies and runs tests for backend + frontend.

Build frontend:

Creates production build (frontend/build) and saves it as an artifact.

Deploy app:

SSH into your server → pulls latest code → installs deps → restarts app with PM2.

✅ Why this use case is important

It shows you can automate testing & deployment.

Most companies expect basic CI/CD like this.

You can later extend this:

Add linting

Use Docker images

Add staging environment

Connect to Kubernetes

⚡ So this is the basic use case of GitLab CI/CD for a MERN stack:
automated test → build → deploy.