import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  API: {
    PATIENT: 'http://localhost/5000',
    TREATMENT_ARM: 'http://localhost/5010',
    ION_REPORTERS: 'http://localhost:3001',
    SAMPLE_CONTROLS: 'http://localhost:3002',
    ALIQUOT: 'http://localhost:3003',
    MESSAGE: 'http://localhost:8080' // 8080 for jetty docker; 10250 for wildfly docker; 8080 for wilfly/maven;
  },
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA', // Dev by default
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = BaseConfig;
