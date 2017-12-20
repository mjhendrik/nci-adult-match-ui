export const Config: EnvConfig = {
    API: {
        PATIENT: 'http://localhost/5000',
        TREATMENT_ARM: 'http://localhost/5010',
        ION_REPORTERS: 'http://localhost:3001',
        SAMPLE_CONTROLS: 'http://localhost:3002',
        ALIQUOT: 'http://localhost:3003',
        MESSAGE: 'http://localhost:8080' // 8080 for jetty docker; 10250 for wildfly docker; 8080 for wilfly/maven;
    },
    CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA', // Dev by default
    AUTH_DOMAIN: 'ncimatch.auth0.com',
};

// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
    CLIENT_ID: string;
    AUTH_DOMAIN: string;
    API: EnvApiConfig;
    ENV?: string;
}

export interface EnvApiConfig {
    PATIENT: string;
    TREATMENT_ARM: string;
    ION_REPORTERS: string;
    SAMPLE_CONTROLS: string;
    ALIQUOT: string;
    MESSAGE: string;
}
