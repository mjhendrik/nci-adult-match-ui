import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  API: {
    PATIENT: '[TBD]',
    TREATMENT_ARM: '[TBD]',
    ION_REPORTER: '[TBD]'
  },
  CLIENT_ID: '[TBD]',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = ProdConfig;
