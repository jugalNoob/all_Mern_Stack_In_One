🔹 GitLab Concepts (Complete Guide)
1. GitLab Basics

Repository (Repo) → where your project code lives (like GitHub).

Branches → feature/login, staging, main → multiple versions of code.

Merge Requests (MRs) → same as Pull Requests in GitHub, used to review/merge code.

Issues & Boards → GitLab has built-in issue tracking like Jira/Trello.

💡 As a MERN dev: You’ll use repos for code, branches for features, and MRs for reviews.

2. GitLab Runners

A runner is a machine (VM, Docker, Kubernetes pod, etc.) that runs your CI/CD jobs.

Shared runners → provided by GitLab (good for quick jobs).

Specific runners → you install & manage (e.g., on your server).

💡 Example: Your CI job installs Node.js, runs npm test, and deploys code — this happens on the runner.

3. GitLab CI/CD

GitLab’s biggest power = built-in CI/CD pipelines.

Configured using a file named .gitlab-ci.yml at project root.

Key CI/CD concepts:

Stages → define order (lint → test → build → deploy).

Jobs → tasks inside stages (e.g., run tests, build React).

Pipelines → collection of all jobs that run after push/merge.

Artifacts → files passed between jobs (e.g., React build folder).

Cache → speeds up pipelines (e.g., cache node_modules).

Variables → environment secrets (DB_URI, JWT_SECRET).

Environments → deploy targets (dev, staging, production).

Triggers → pipelines can trigger other pipelines.

Schedules → run pipelines at fixed times (like cron).

💡 As a MERN dev: You’ll build pipelines to test backend (Node.js), build frontend (React), deploy both to server/cloud.

4. GitLab CI/CD Workflow Example
stages:
  - lint
  - test
  - build
  - deploy

lint:
  stage: lint
  image: node:18
  script:
    - npm ci
    - npm run lint

test:
  stage: test
  image: node:18
  script:
    - npm ci
    - npm run test

build_frontend:
  stage: build
  image: node:18
  script:
    - cd frontend
    - npm ci
    - npm run build
  artifacts:
    paths:
      - frontend/build/

deploy_prod:
  stage: deploy
  script:
    - echo "Deploying to production..."
    - ssh user@server "cd /app && git pull && npm install && pm2 restart all"
  environment:
    name: production
    url: https://yourapp.com
  when: manual
  only:
    - main

5. GitLab Variables & Secrets

Stored in Project → Settings → CI/CD → Variables.

Used in pipelines like $DB_URI, $JWT_SECRET.

Keep secrets out of code.

💡 Example:

script:
  - echo "Connecting to $DB_URI"

6. GitLab Environments & Deployments

Environments → dev, staging, prod.

Pipelines can deploy different code to different servers.

Each environment has a URL.

💡 Example:

deploy_staging:
  stage: deploy
  environment:
    name: staging
    url: https://staging.example.com

7. GitLab Artifacts & Caching

Artifacts = files shared between jobs (e.g., React build).

Cache = reuses dependencies across jobs (faster builds).

💡 Example:

cache:
  paths:
    - node_modules/

8. GitLab Runners with Docker

You can run pipelines in Docker containers.

Example: use node:18 image for Node.js jobs.

💡 Advanced: Build Docker images of MERN app, push to GitLab Container Registry, deploy with Kubernetes.

9. GitLab Container Registry

Free Docker image registry inside GitLab.

Store backend/frontend images and deploy via Docker or Kubernetes.

💡 Example job:

build_image:
  stage: build
  script:
    - docker build -t registry.gitlab.com/myuser/myapp:latest .
    - docker push registry.gitlab.com/myuser/myapp:latest

10. GitLab Auto DevOps

Prebuilt pipelines for common apps.

Auto-detects language, builds, tests, and deploys.

Works best with Docker + Kubernetes.

11. GitLab Security & Compliance

Code Quality reports (lint, SonarQube).

SAST/DAST scans (security scans).

Dependency scans (find vulnerable npm packages).

💡 Many companies use GitLab for DevSecOps.

12. GitLab Advanced Features

Monorepos → multiple apps in one repo (frontend + backend).

Parent/Child pipelines → break large pipelines.

Matrix jobs → run multiple versions (Node 16, Node 18).

Infrastructure as Code → GitLab works well with Terraform.

Kubernetes integration → deploy containers easily.

Monitoring → track deployments & logs.

🔹 Summary for MERN Job Interviews

If you want to stand out:
✅ Know Git basics (repo, branch, merge request).
✅ Write a .gitlab-ci.yml (lint, test, build, deploy).
✅ Use runners & Docker images.
✅ Deploy to staging/prod environments.
✅ Manage variables/secrets properly.
✅ Optimize pipelines with cache, artifacts, parallel jobs.
✅ (Bonus) Use Docker + GitLab Container Registry.
✅ (Bonus) Mention Kubernetes integration.