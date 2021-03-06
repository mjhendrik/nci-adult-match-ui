import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  // Enabling SCSS to overide the seed's setting as per https://github.com/mgechev/angular-seed/wiki/Working-with-SASS
  ENABLE_SCSS = true;

  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
    'node_modules/bootstrap/dist/fonts/**'
  ];

  constructor() {

    super();

    this.APP_TITLE = 'NCI Adult MATCH';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'jquery/dist/jquery.slim.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: 'nvd3/build/nv.d3.min.css', inject: true },
      { src: 'ng2-toastr/bundles/ng2-toastr.min.css', inject: true }
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
      { src: `${this.APP_SRC}/polyfills/web-animations.min.js`, inject: 'libs' }
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
      {
        name: 'angular2-jwt',
        // Path to the package's bundle
        path: 'node_modules/angular2-jwt/angular2-jwt.js'
      },
      {
        name: 'lodash',
        path: 'node_modules/lodash/lodash.js'
      },
      {
        name: 'moment',
        path: 'node_modules/moment/moment.js'
      },
      {
        name: 'd3',
        path: 'node_modules/d3/d3.js'
      },
      {
        name: 'nvd3',
        path: 'node_modules/nvd3/build/nv.d3.min.js'
      },
      {
        name: 'ng2-nvd3',
        // path: 'node_modules/ng2-nvd3/build/lib/ng2-nvd3.d.ts'
        path: 'node_modules/ng2-nvd3/build/lib/ng2-nvd3.js'
      },
      {
        name: 'ngx-dropzone-wrapper',
        path: 'node_modules/ngx-dropzone-wrapper/bundles/ngx-dropzone-wrapper.umd.js'
      },
      // required for dev build
      {
        name: 'ngx-bootstrap',
        path: 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
      },
      // required for prod build
      {
        name: 'ngx-bootstrap/*',
        path: 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
      },
      {
        name: 'ng2-toastr',
        path: 'node_modules/ng2-toastr/bundles/ng2-toastr.min.js'
      },
      {
        name: 'tslib',
        path: 'node_modules/tslib/tslib.js'
      }
    ];

    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
