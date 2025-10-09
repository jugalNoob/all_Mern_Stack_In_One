stages:
  - install
  - test
  - deploy

# Install dependencies
install:
  stage: install
  image: node:18
  script:
    - npm install
  cache:
    paths:
      - node_modules/
  artifacts:
    paths:
      - node_modules/

# Run tests (you can add Jest/Mocha later)
test:
  stage: test
  image: node:18
  script:
    - echo "✅ No tests yet, skipping..."
  only:
    - main

# Deploy to server (example: SSH to VPS)
deploy:
  stage: deploy
  script:
    - echo "🚀 Deploying Node.js app..."
    - ssh $DEPLOY_USER@$DEPLOY_HOST "cd /var/www/node-express && git pull && npm install && pm2 restart all"
  environment:
    name: production
    url: https://yourdomain.com
  when: manual
  only:
    - main
