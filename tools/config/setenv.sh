#! /bin/bash
sed -i -e "s/I___name___I/$ENV_NAME/g;s/I___AUTH0_DOMAIN___I/$AUTH0_DOMAIN/g;s/I___AUTH0_CLIENT_ID___I/$AUTH0_CLIENT_ID/g;s/I___loginUrl___I/$LOGIN_URL/g;s/I___envTag___I/$ENV_TAG/g" /usr/local/apache2/match/app/js/*.app.min.js
