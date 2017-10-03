#! /bin/bash
sed -i -e "s/I___PATIENT_API___I/$PATIENT_API/g;s/I___TREATMENT_ARM_API___I/$ENT_ARM_API/g;s/I___ION_REPORTERS_API___I/$PORTERS_API/g;s/I___SAMPLE_CONTROLS_API___I/$ONTROLS_API/g;s/I___ALIQUOT_API___I/$ALIQUOT_API/g;s/I___MESSAGE_API___I/$MESSAGE_API/g;s/I___CLIENT_ID___I/$__CLIENT_ID/g;s/I___AUTH_DOMAIN___I/$AUTH_DOMAIN/g;" /usr/local/apache2/match/app/shared/config/env.config.js
