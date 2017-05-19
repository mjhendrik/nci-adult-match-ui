import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  // Empty URL will force the cervices to use mock jsons instead of calling the real backend services
  API: {
    PATIENT: 'http://localhost:5000/api/v1',
    ION_REPORTER: 'http://localhost:5020/api/v1',
    TREATMENT_ARM: 'http://localhost:5010/api/v1'
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = DevConfig;
