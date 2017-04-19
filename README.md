# NCI MATCH Adult Study Angular Front-End

[![Build Status](https://travis-ci.org/CBIIT/nci-adult-match-ui.svg?branch=master)](https://travis-ci.org/CBIIT/nci-adult-match-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/FNLCR/nci-adult-match-ui?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CBIIT/nci-adult-match-ui&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/FNLCR/nci-adult-match-ui?utm_source=github.com&utm_medium=referral&utm_content=CBIIT/nci-adult-match-ui&utm_campaign=Badge_Coverage)

## How to start

**Note** that this project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular-seed/wiki/Speed-up-the-build-on-Windows)**.

```bash
$ git clone https://github.com/CBIIT/nci-adult-match-ui.git
$ cd nci-adult-match-ui

# install the project's dependencies
$ npm install

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# if you see an error like 'Node Sass could not find a binding for your current environment'
$ npm rebuild node-sass --force

# generate api documentation
$ npm run compodoc
$ npm run serve.compodoc


# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod

# dev build of multiple applications (by default the value of --app is "app")
$ npm start -- --app baz
$ npm start -- --app foo
$ npm start -- --app bar
```
_Does not rely on any global dependencies._

## How to start with AoT compilation

**Note** that AoT compilation requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

In order to start with AoT use:

```bash
# prod build with AoT compilation, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.aot
```

## Tree-shaking with Rollup

This application provides full support for tree-shaking your production builds with Rollup, which can drastically reduce the size of your application. This is the highest level of optimization currently available.

To run this optimized production build, use: 

```bash
# prod build with AoT compilation and Rollup tree-shaking, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.rollup.aot
```

Your project will be compiled ahead of time (AOT), and then the resulting bundle will be tree-shaken and minified. During the tree-shaking process Rollup statically analyses your code, and your dependencies, and includes the bare minimum in your bundle.

**Notes** 
- Beware of non-static/side-effectful imports. These cannot be properly optimized. For this reason, even though tree-shaking is taking place the developer still needs to be careful not to include non-static imports that are unnecessary, as those referenced imports will always end up in final bundle. Special attention should be given to RxJs, which makes heavy use of non-static/side-effectful imports: make sure you only add the operators you use, as any added operators will be included in your final production bundle.
- UMD modules result in code that cannot be properly optimized. For best results, prefer ES6 modules whenever possible. This includes third-party dependencies: if one is published in both UMD and ES6 modules, go with the ES6 modules version.
- During a production build, CommonJs modules will be automatically converted to ES6 modules. This means you can use them and/or require dependencies that use them without any issues.

## Dockerization

The application provides full Docker support. You can use it for both development as well as production builds and deployments.

### How to build and start the dockerized version of the application 

### Local development build and deployment

Run the following:

```bash
$ docker-compose build
$ docker-compose up -d
```

Now open your browser at http://localhost:5555

### Test or Production build and deployment

To build the production image based on Apache run the following:

```bash
$ docker build -f .docker/dockerfile.httpd -t "fnlcr/nci-adult-match-ui:latest" .
```

To run the docker locally use port 5555 because Auth0 is configured to use it

```bash
$ docker run -it -p 5555:80  "matchbox/nci-adult-match-ui"
```
