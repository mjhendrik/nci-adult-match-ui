# NCI MATCH Adult Study Angular Front-End

[![Build Status](https://travis-ci.org/CBIIT/nci-adult-match-ui.svg?branch=master)](https://travis-ci.org/CBIIT/nci-adult-match-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/matchbox/nci-adult-match-ui?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CBIIT/nci-adult-match-ui&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/matchbox/nci-adult-match-ui?utm_source=github.com&utm_medium=referral&utm_content=CBIIT/nci-adult-match-ui&utm_campaign=Badge_Coverage)
[![Dependency Status](https://david-dm.org/CBIIT/nci-adult-match-ui.svg)](https://david-dm.org/CBIIT/nci-adult-match-ui)
[![devDependency Status](https://david-dm.org/CBIIT/nci-adult-match-ui/dev-status.svg)](https://david-dm.org/CBIIT/nci-adult-match-ui?type=dev)

## Local development

*NOTE: You need to have access to [FNLCR](https://hub.docker.com/u/fnlcr/) private docker repository. Please contact systems team if you need the access.*

Login into docker using your docker account (needed only once)

```
docker login
```

Make sure you have the following environment variables:

    AUTH0_CLIENT_ID
    AUTH0_CLIENT_SECRET
    AUTH0_DATABASE
    AUTH0_DOMAIN
    AUTH0_MANAGEMENT_ID
    AUTH0_MANAGEMENT_SECRET
    AWS_REGION
    AWS_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY
    AWS_SMTP_PASSWORD
    SLACK_TOKEN

To run the front-end and all back-end services:

```
docker-compose up
```

Wait for all of the services to start, then open your browser at [http://localhost:5555](http://localhost:5555)

To run only some of the services (for example only the `ui` and `patient-api`, with their dependencies)

*NOTE: Each time you run `docker-compose down` the data volumes for the docker containers are removed and you'll have to restore the database backups again.*

For front-end developers running the front-end code in node, run everything __but__ the front-end:

```
docker-compose up patient-api treatment-arm-api message-api mock-ecog
```

Full list of services included in `docker-compose.yml`

* `ui`
* `patient-api`
* `treatment-arm-api`
* `ion-reporters-api`
* `sample-controls-api`
* `aliquots-api`
* `ir-processor-api`
* `message-api`
* `mock-ecog`
* `mongo`
* `dynamo`

To pull the latest images:

```
docker-compose pull
```

To rebuild the latest UI docker image:

```
docker-compose build
```

## For front-end developers

*NOTE: that this project requires node v6.5.x or higher and npm 3.10.3*

```
git clone https://github.com/CBIIT/nci-adult-match-ui.git
cd nci-adult-match-ui

# install the project's dependencies
npm install

# watches your files and uses livereload by default
npm start

# Run using mock JSONs instead of back-end services
npm run start.dev-mock

# if you see an error like 'Node Sass could not find a binding for your current environment'
npm rebuild node-sass --force

# to start deving with livereload site and coverage as well as continuous testing
npm run start.deving

# dev build
npm run build.dev
# prod build, will output the production application in `dist/prod`

# Build using mock JSONs instead of back-end services
npm run build.dev-mock

# Build for using from inside docker-compose (very rarely needed)
npm run build.dev-docker
```

## Dockerization

### Test or Production Docker build

To build the image based on Apache run the following command. Please make sure the UI has been built as `dev`, run `npm run build.dev` if necessary.

```
docker build -f .docker/dockerfile.httpd -t "fnlcr/nci-adult-match-ui:latest" .
```

To run the docker locally use port 5555 because Auth0 is configured to use it.

```
docker run --name "nci-adult-match-ui" -it -p 5555:80  "fnlcr/nci-adult-match-ui:latest"
```


## Trouble shooting
### Mongo connection refused  ( ex: mongo:27017: [Errno 111] Connection refused )

Following solutions are tested.  One solution works. ( Good Luck :-))

1. docker-compose down
   docker system prune
   docker-compose up ...

2. docker-compose down
   Docker Engine RESTART
   docker-compose up ...
   
3. docker-compose down
   Docker Engine hard RESET ( Go to Docker Engine Preferences ) select --> 'Reset to factory defaults'
   docker login <-- Log in the terminal to docker hub
   docker-compose up ...