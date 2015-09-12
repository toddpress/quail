// Karma configuration for Quail unit tests

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'browserify',
      'mocha',
      'chai',
      'sinon'
    ],

    // list of files / patterns to load in the browser
    files: [
      // Dependencies
      {pattern: 'node_modules/jquery/dist/jquery.min.js', watched: false},

      // Fixtures
      {pattern: 'src/quail.js'},
      {pattern: 'src/js/components/*.js'},
      {pattern: 'src/core/*.js'},

      // Specs
      {pattern: 'test/unit/*Spec.js'},
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['html2js']
    },
    preprocessors: {
      'src/quail.js': [ 'browserify' ],
      'src/js/components/*.js': [ 'browserify' ],
      'src/core/*.js': [ 'browserify' ],
      'test/unit/*Spec.js': [ 'browserify' ],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    // the default configuration
    htmlReporter: {
      outputDir: 'karma_html',
      templatePath: __dirname + '/node_modules/karma-html-reporter/jasmine_template.html'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome',
      // 'IE',
      //'Safari',
      //'Firefox',
      //'Opera',
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    browserify: {
      transform: [
        "babelify"
      ]
    },
  });
};
