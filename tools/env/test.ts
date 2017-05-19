import { EnvConfig } from './env-config.interface';

const TestConfig: EnvConfig = {
  API: {
    PATIENT: 'https://***REMOVED***/api/v1',
    TREATMENT_ARM: 'https://***REMOVED***/api/v1',
    ION_REPORTER: 'https://***REMOVED***/api/v1'
  },
  CLIENT_ID: 'S2nuyxIldVc6qG7360ZTT2Er0IQA3AlX', // IntTest
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = TestConfig;
