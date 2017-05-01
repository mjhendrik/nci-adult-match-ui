import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  // Empty URL will force the cervices to use mock jsons instead of calling the real backend services
  API: {
    PATIENT: 'http://patient-api/5000',
    TREATMENT_ARM: '',
    ION_REPORTER: 'http://localhost:5555/api/v1/ion_reporters/healthcheck?site='
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = DevConfig;
