import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  API: {
    PATIENT: 'http:\\localhost\5000',
    TREATMENT_ARM: '[TBD]',
    ION_REPORTER: '[TBD]'
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = DevConfig;
