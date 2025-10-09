1:: app.js  file create   //function code 


const Mainone=()=>{
let obj={
    name:'jugal',
    roll:'45',
    classes:'10th',
    gender:'male'
}
return obj
}
console.log(Mainone())

2::gitlib-ci.ymlnew.sx // all command 


stages:
  - run
run_js:
  stage: run
  image: node:18
  script:
    - node js.js




    # stages:
#   - run

# run_js:
#   stage: run
#   image: node:18
#   script:
#     -mkdir myproject
#     -cd myproject
#     - node js.js


stages:
  - run

run_js:
  stage: run
  image: node:18
  script:
    - mkdir myproject && cd myproject && cp ../js.js ./ && node js.js




# stages:
#   - build
#   - test
#   - deploy

# build:
#   stage: build
#   script:
#     - echo "first step one"
#     - echo "second step one"

# test-job:
#   stage: test
#   script:
#     - echo "test step one"

# deploy:
#   stage: deploy
#   script:
#     - echo "deploy step one"




Your current setup will already run js.js successfully inside myproject.

If you want, I can create a full 
ERN GitLab CI/CD pipeline that:

Installs Node dependencies

Runs backend tests

Builds frontend

Deploys automatically