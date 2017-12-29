import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  // Empty URL will force the cervices to use mock jsons instead of calling the real backend services
  API: {
    PATIENT: 'http://localhost:5000/api/v1',
    TREATMENT_ARM: 'http://localhost:5010/api/v1',
    ION_REPORTERS: 'http://localhost:3001/api/v1',
    SAMPLE_CONTROLS: 'http://localhost:3002/api/v1',
    ALIQUOT: 'http://localhost:3003/api/v1',
    MESSAGE: 'http://localhost:8080/api/v1' // 8080 for jetty docker; 10250 for wildfly docker; 8080 for wilfly/maven;
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = DevConfig;
