import { EnvConfig } from './env-config.interface';

const TestConfig: EnvConfig = {
  API: {
    PATIENT: '[TBD]',
    TREATMENT_ARM: '[TBD]',
    ION_REPORTER: 'https://***REMOVED***/api/v1/ion_reporters/healthcheck?site='
  },
  CLIENT_ID: 'S2nuyxIldVc6qG7360ZTT2Er0IQA3AlX', // IntTest
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = TestConfig;
