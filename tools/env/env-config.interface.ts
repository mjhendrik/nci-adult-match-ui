// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  CLIENT_ID: string;
  AUTH_DOMAIN: string;
  REDIRECT_URL: string;
  API?: string;
  ENV?: string;
}
