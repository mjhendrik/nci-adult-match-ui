# NCI MATCH Adult Study Angular Front-End

[![Build Status](https://travis-ci.org/CBIIT/nci-adult-match-ui.svg?branch=master)](https://travis-ci.org/CBIIT/nci-adult-match-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/matchbox/nci-adult-match-ui?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CBIIT/nci-adult-match-ui&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/matchbox/nci-adult-match-ui?utm_source=github.com&utm_medium=referral&utm_content=CBIIT/nci-adult-match-ui&utm_campaign=Badge_Coverage)

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

# Run using mock JSONs instead of back-end services
$ npm run start.dev-mock

# Run for using from inside docker-compose
$ npm run start.dev-docker

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

# Build using mock JSONs instead of back-end services
$ npm run build.dev-mock

# Build for using from inside docker-compose
$ npm run build.dev-docker

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

### How to build and start the dockerized version of the application 

### Local development build and deployment

To build latest UI image (otherwise tha previous image is used). Please make sure the UI has been built as `dev`, run `npm run build.dev` if necessary.

```bash
$ docker-compose build
```

To update all dependent images:

```bash
$ docker-compose pull
```

To start the front-end and services locally:

```bash
$ docker-compose up
```

Now open your browser at [http://localhost:5555](http://localhost:5555)

To start only Monbgo DB, for example to develop your services locally:

```bash
$ docker-compose up mongo
```

To restore MongoDB data:

```bash
$ docker exec -it nciadultmatchui_mongo_1 bash
$ mongorestore --db match ./backup
```

After you've restored the backup you may check the restored data (while still attached to the mongo container, as above):

```bash
$ mongo shell
$ show dbs
$ use match
$ show collections
$ db.patient.count()
```

Exit from MongoDB shell by pressing `Ctrl+C`


### Test or Production build and deployment

To build the image based on Apache run the following:

```bash
$ docker build -f .docker/dockerfile.httpd -t "fnlcr/nci-adult-match-ui:latest" .
```

To run the docker locally use port 5555 because Auth0 is configured to use it. Please make sure the UI has been built as `dev`, run `npm run build.dev` if necessary.

```bash
$ docker run --name "nci-adult-match-ui" -it -p 5555:80  "fnlcr/nci-adult-match-ui:latest"
```
