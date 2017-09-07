import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  API: {
    PATIENT: '[TBD]',
    TREATMENT_ARM: '[TBD]',
    ION_REPORTERS: '[TBD]',
    SAMPLE_CONTROLS: '[TBD]',
    ALIQUOT: '[TBD]'
  },
  CLIENT_ID: '[TBD]',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = ProdConfig;
