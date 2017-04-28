import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  API: {
    PATIENT: 'http:\\localhost\5000',
    TREATMENT_ARM: '[TBD]',
    ION_REPORTER: '[TBD]'
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA', // Dev by default
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = BaseConfig;
