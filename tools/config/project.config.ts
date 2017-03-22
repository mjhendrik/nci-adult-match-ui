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
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'jquery/dist/jquery.slim.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      { src: `${this.APP_SRC}/polyfills/web-animations.min.js`, inject: 'libs' }
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [{
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
      path: 'node_modules/d3/index.js'
    }, {
      name: '@swimlane/ngx-charts',
      path: 'node_modules/@swimlane/ngx-charts/release/index.js',
    },
    {
      name: 'd3-hierarchy',
      path: 'node_modules/d3-hierarchy/build/d3-hierarchy.js',
    },
    {
      name: 'd3-array',
      path: 'node_modules/d3-array/build/d3-array.js',
    },
    {
      name: 'd3-brush',
      path: 'node_modules/d3-brush/build/d3-brush.js',
    },
    {
      name: 'd3-force',
      path: 'node_modules/d3-force/build/d3-force.js',
    },
    {
      name: 'd3-format',
      path: 'node_modules/d3-format/build/d3-format.js',
    },
    {
      name: 'd3-interpolate',
      path: 'node_modules/d3-interpolate/build/d3-interpolate.js',
    },
    {
      name: 'd3-scale',
      path: 'node_modules/d3-scale/build/d3-scale.js',
    },
    {
      name: 'd3-selection',
      path: 'node_modules/d3-selection/build/d3-selection.js',
    },
    {
      name: 'd3-shape',
      path: 'node_modules/d3-hierarchy/build/d3-hierarchy.js',
    },
    {
      name: 'd3-time',
      path: 'node_modules/d3-time/build/d3-time.js',
    },
    {
      name: 'd3-time-format',
      path: 'node_modules/d3-time-format/build/d3-time-format.js',
    },
    {
      name: 'd3-color',
      path: 'node_modules/d3-color/build/d3-color.js',
    },
    {
      name: 'd3-dispatch',
      path: 'node_modules/d3-dispatch/build/d3-dispatch.js',
    },
    {
      name: 'd3-drag',
      path: 'node_modules/d3-drag/build/d3-drag.js',
    },
    {
      name: 'd3-transition',
      path: 'node_modules/d3-transition/build/d3-transition.js',
    },
    {
      name: 'd3-quadtree',
      path: 'node_modules/d3-quadtree/build/d3-quadtree.js',
    },
    {
      name: 'd3-collection',
      path: 'node_modules/d3-collection/build/d3-collection.js',
    },
    {
      name: 'd3-timer',
      path: 'node_modules/d3-timer/build/d3-timer.js',
    },
    {
      name: 'd3-ease',
      path: 'node_modules/d3-ease/build/d3-ease.js',
    }];

    this.SYSTEM_BUILDER_CONFIG.paths.d3 = 'node_modules/d3/build/d3.js';

    this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
