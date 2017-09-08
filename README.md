# NCI MATCH Adult Study Angular Front-End

[![Build Status](https://travis-ci.org/CBIIT/nci-adult-match-ui.svg?branch=master)](https://travis-ci.org/CBIIT/nci-adult-match-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/matchbox/nci-adult-match-ui?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CBIIT/nci-adult-match-ui&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d0059ed74fc241c3adc2da283aa0b7a9)](https://www.codacy.com/app/matchbox/nci-adult-match-ui?utm_source=github.com&utm_medium=referral&utm_content=CBIIT/nci-adult-match-ui&utm_campaign=Badge_Coverage)
[![Dependency Status](https://david-dm.org/CBIIT/nci-adult-match-ui.svg)](https://david-dm.org/CBIIT/nci-adult-match-ui)
[![devDependency Status](https://david-dm.org/CBIIT/nci-adult-match-ui/dev-status.svg)](https://david-dm.org/CBIIT/nci-adult-match-ui?type=dev)

## Local development

*Note: You need to have access to [FNLCR](https://hub.docker.com/u/fnlcr/) private docker repository. Please contact systems team if you need the access.*

Make sure you have the following environment variables:

    AUTH0_CLIENT_ID
    AUTH0_CLIENT_SECRET # should be base-64 encoded
    AUTH0_DATABASE
    AUTH0_DOMAIN
    AUTH0_MANAGEMENT_ID
    AUTH0_MANAGEMENT_SECRET
    AWS_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY
    AWS_SMTP_PASSWORD
    SLACK_TOKEN

Login into docker using your docker account (needed only once)

```
docker login
```

To run the front-end and all back-end services:

```
docker-compose up
```

Wait for all of the services to start, then open your browser at [http://localhost:5555](http://localhost:5555)

To run only some of the services (for example only the `ui` and `patient-api`, with their dependencies)

*Note: Each time you run `docker-compose down` the data volumes for the docker containers are removed and you'll have to restore the database backups again.*

For front-end developers running the front-end code in node, run everything __but__ the front-end:

```
docker-compose up patient-api treatment-arm-api ion-reporters-api sample-controls-api aliquots-api ir-processor-api 
```

Full list of services included in `docker-compose.yml`

* `ui`
* `patient-api`
* `treatment-arm-api`
* `ion-reporters-api`
* `sample-controls-api`
* `aliquots-api`
* `ir-processor-api`
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

## Restoring Data to MongoDB for Local Development

*Note: the `docker-compose` system needs to be up*

```
docker exec -it nciadultmatchui_mongo_1 bash
mongo Match --eval "db.dropDatabase()"
mongorestore --db Match ./backup
```

After you've restored the backup you may check the restored data (while still attached to the mongo container)

```
mongo shell
show dbs
use Match
show collections
db.patient.count()
```

Exit from MongoDB shell by pressing `Ctrl+C` or typing `exit`.

## Backing up MongoDB data

```
docker exec -it nciadultmatchui_mongo_1 bash
mongodump --db Match -o /backup
exit
```

Exit from MongoDB shell by pressing `Ctrl+C`

Please note each time you run `docker-compose down` the data volumes for the docker containers are removed and you'll have to import the backups again.

## For front-end developers

*Note: that this project requires node v6.5.x or higher and npm 3.10.3*

```
git clone https://github.com/CBIIT/nci-adult-match-ui.git
cd nci-adult-match-ui

# install global dependencies
npm install -g cucumber

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
