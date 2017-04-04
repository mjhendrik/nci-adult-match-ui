// Load our SystemJS configuration.
System.config({
  baseURL: '/base/',
  defaultJSExtensions: true,
  paths: {
    'angular2/*': 'node_modules/angular2/*.js',
    'rxjs/*': 'node_modules/rxjs/*.js',
    'angular2-jwt/*': 'node_modules/angular2-jwt/*.js',
    'ng2-charts/*': 'node_modules/ng2-charts/*.js',
    'lodash/*': 'node_modules/lodash/*.js',
  }
});
