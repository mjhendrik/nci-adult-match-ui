// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth0: {
    domain: 'ncimatch.auth0.com',
    clientId: 'RjoYZXUDEzQxMJw04C6B5dsQKqUAEYzA',
    callbackURL: 'http://localhost:5555/dashboard',
    whitelistDomain: ['http://localhost']
  }
};
