// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  CLIENT_ID: string;
  AUTH_DOMAIN: string;
  API: EnvApiConfig;
  ENV?: string;
}

interface EnvApiConfig {
  PATIENT: string;
  TREATMENT_ARM: string;
  ION_REPORTER: string;
}

export class EnvConstants {
  TBD: string = 'TBD';
}
