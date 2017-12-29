import { EnvConfig } from './env-config.interface';

const TestConfig: EnvConfig = {
  API: {
    PATIENT: 'I___PATIENT_API___I',
    TREATMENT_ARM: 'I___TREATMENT_ARM_API___I',
    ION_REPORTERS: 'I___ION_REPORTERS_API___I',
    SAMPLE_CONTROLS: 'I___SAMPLE_CONTROLS_API___I',
    ALIQUOT: 'I___ALIQUOT_API___I',
    MESSAGE: 'I___MESSAGE_API___I'
  },
  CLIENT_ID: 'I___CLIENT_ID___I',
  AUTH_DOMAIN: 'I___AUTH_DOMAIN___I'
};

export = TestConfig;
