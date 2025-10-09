///--?>>GitLib Docker Upload 

You push code to GitLab
        ↓
GitLab CI/CD triggers pipeline
        ↓
Build stage: new Docker images built & pushed to registry
        ↓
Deploy stage: server pulls new images & restarts containers
        ↓
Your MERN app is updated automatically





//---> gitLab -->GitHub


You push project to GitLab
        ↓
GitLab CI/CD triggers
        ↓
sync_to_github job runs
        ↓
Your project is pushed to GitHub automatically
