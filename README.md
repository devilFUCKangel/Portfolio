# my-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### hosting note
1. [AWS Elastic Beanstalk](http://env-portfolio.eba-hqy7qmxw.ap-southeast-1.elasticbeanstalk.com/)
    - hard to debug
    - CLI hard to install and use
    - deploy setting confuse, tomcat instead of nodejs
    - upload and deploy
    - hard to manage on AWS web

2. [AWS S3 static hosting](https://vuecliplugins3bucket.s3-ap-southeast-1.amazonaws.com/index.html)
    - some settings problem on AWS S3's properties
    - official recommended vue-cli plugin for easy deploy
    - upload and deploy

3. [AWS Amplify](https://master.d3cd60ujwjqht7.amplifyapp.com/)
    - easy web interface to manage and deploy
    - push github and deploy
    - many choice (BitBucket, Gitlab, AWS CodeCmmit, wihout git)
    - backend API easy setup (haven't test)

4. [Google Firebase](https://portfolio-nang.web.app/),[2](https://portfolio-nang.firebaseapp.com/)
    - easy to deploy
    - firebase toolkit easy to use and install
    - easy to manage on Firebase web
    - upload and deploy
    - nice domain name, and extra

5. [Netlify](https://relaxed-kilby-aac746.netlify.app/)
    - push github and deploy
    - easy web interfaces to manage and deploy
    - serve AWS lambda functions (haven't test)

6. [Heroku](https://portfolio-nang.herokuapp.com/)
    - push heroku master and deploy (upload to heroku git with heroku CLI)
    - other choices, push github and deploy, and container registry
    - easy web interfaces to manage and deploy with github
    - many setting, such as build pack
    - nice domain name

7. [Github Pages](https://devilfuckangel.github.io/Portfolio/)
    - easy to deploy for simple page
    - a bit complex to setup and many step (token, deploy concept, config file)
    - need extra step for auto update (travis and rubygem)
    - nice domain name, unlimited project pages

8. [Surge](https://devilfuckangel.surge.sh/)
    - upload and deploy
    - only 4 step (install, register, upload, deploy)
    - lack UI and web to manage
    - nice domain name

9. Python Anywhere
    - fail to host with npm through bash command
    - need use python as backend (haven't test)