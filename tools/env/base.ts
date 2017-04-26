import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  // Sample API url
  API: 'https://demo.com',
  CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA', // Dev by default,
  REDIRECT_URL: 'http://localhost:5555/dashboard',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = BaseConfig;
