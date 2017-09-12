import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  // Empty URL will force the cervices to use mock jsons instead of calling the real backend services
  API: {
    PATIENT: '',
    TREATMENT_ARM: '',
    ION_REPORTERS: '',
    SAMPLE_CONTROLS: '',
    ALIQUOT: '',
    MESSAGE: ''
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = DevConfig;
