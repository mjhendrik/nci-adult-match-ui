// import { EnvConfig } from '../../../../../tools/env/env-config.interface';

export const Config: EnvConfig = {
    CLIENT_ID: '',
    AUTH_DOMAIN: '',
    API: {
        PATIENT: '',
        TREATMENT_ARM: '',
        ION_REPORTERS: '',
        SAMPLE_CONTROLS: '',
        ALIQUOT: '',
        MESSAGE: '',
    },
    ENV: ''
};

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
    ION_REPORTERS: string;
    SAMPLE_CONTROLS: string;
    ALIQUOT: string;
    MESSAGE: string;
}

export class EnvConstants {
    TBD: 'TBD';
}
