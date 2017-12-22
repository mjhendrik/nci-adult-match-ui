# NciAdultMatchUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:5555/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Local development with APIs

*NOTE: You need to have access to [FNLCR](https://hub.docker.com/u/fnlcr/) private docker repository. Please contact systems team if you need the access.*

Login into docker using your docker account (needed only once)

```terminal
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

```terminal
docker-compose up
```

Wait for all of the services to start, then open your browser at [http://localhost:5555](http://localhost:5555)

To run only some of the services (for example only the `ui` and `patient-api`, with their dependencies)

*NOTE: Each time you run `docker-compose down` the data volumes for the docker containers are removed and you'll have to restore the database backups again.*

For front-end developers running the front-end code in node, run everything __but__ the front-end:

```terminal
docker-compose up patient-api treatment-arm-api message-api mock-ecog
```

Pull fresh APIs and reset the seed data:

```terminal
docker-compose pull patient-api treatment-arm-api message-api mock-ecog mongo && docker-compose down && docker-compose up patient-api treatment-arm-api message-api mock-ecog
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

```terminal
docker-compose pull
```

To rebuild the latest UI docker image:

```terminal
docker-compose build
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
