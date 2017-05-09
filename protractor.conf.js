const config = {
  baseUrl: 'http://localhost:5555/',

  // These are possibly needed for the cucumber? Try to remove later!
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,

  specs: [
    // './dist/e2e/**/*.e2e-spec.js'
    'src/e2e/features/*.feature'
  ],

  exclude: [],

  // 'jasmine' by default will use the latest jasmine framework
  // framework: 'jasmine',
  
  // 'custom' framework so that cucumber can work
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),


  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: [
      'src/e2e/step-definitions/**/*.ts',
      'src/e2e/support/**/*.ts'
    ],
    format: 'pretty'
  },


  // allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    // showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    // defaultTimeoutInterval: 400000
  },


  directConnect: true,

  capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    browser.ignoreSynchronization = false;
  },


  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
  useAllAngular2AppRoots: true
};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
}

exports.config = config;
