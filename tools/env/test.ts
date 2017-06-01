import { EnvConfig } from './env-config.interface';

const TestConfig: EnvConfig = {
  API: {
    PATIENT: 'https://match-int.nci.nih.gov/api/v1',
    TREATMENT_ARM: 'https://match-int.nci.nih.gov/api/v1',
    ION_REPORTER: 'https://match-int.nci.nih.gov/api/v1'
  },
  CLIENT_ID: 'S2nuyxIldVc6qG7360ZTT2Er0IQA3AlX', // IntTest
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = TestConfig;
