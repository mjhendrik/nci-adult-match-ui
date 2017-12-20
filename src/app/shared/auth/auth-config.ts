interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    // REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA',
    CLIENT_DOMAIN: 'ncimatch.auth0.com', // e.g., you.auth0.com
    AUDIENCE: 'http://localhost/5000', // e.g., http://localhost:3001
    // REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid profile email'
};
