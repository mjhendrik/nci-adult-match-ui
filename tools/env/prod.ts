import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  CLIENT_ID: '[TBD]',
  AUTH_DOMAIN: 'ncimatch.auth0.com'
};

export = ProdConfig;
