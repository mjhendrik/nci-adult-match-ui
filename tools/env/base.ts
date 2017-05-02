import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  API: {
    PATIENT: 'http://localhost/5000',
    ION_REPORTER: 'http://localhost:5555/api/v1',
    TREATMENT_ARM: '[TBD]'
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA', // Dev by default
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = BaseConfig;
