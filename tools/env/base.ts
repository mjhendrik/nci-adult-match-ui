import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  API: {
    PATIENT: 'http://localhost/5000',
    ION_REPORTER: 'http://localhost:5020',
    TREATMENT_ARM: 'http://localhost/5010'
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA', // Dev by default
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = BaseConfig;
