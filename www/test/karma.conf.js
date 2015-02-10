// Karma configuration
// Generated on Tue Feb 03 2015 20:26:48 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	   '../www/lib/angular/angular.js',
	   '../www/lib/angular-animate/angular-animate.js',
//	   '../www/lib/angular/angular-resource.js',
	   '../www/lib/angular-sanitize/angular-sanitize.js',
	   '../www/lib/angular-mocks/angular-mocks.js',
	   '../www/lib/angular-ui-router/release/angular-ui-router.js',
	   '../www/lib/angular-route/angular-route.js',
	   '../www/lib/angular-scenario/angular-scenario.js',	
	   '../www/lib/angular-scenario/jstd-scenario-adapter.js',
//	   '../www/js/bootstrap-custom/ui-bootstrap-custom-0.10.0.js',
	   '../www/lib/ionic/js/ionic.js',
	   '../www/lib/ionic/js/ionic-angular.js',
	   '../www/templates/*.html',	
	   '../www/js/*.js',
	   '../www/js/controllers/*.js',
	   '../www/js/services/*.js',	
       'test/unit/*.js',
	   'test/e2e/*.js'	
//       'test/midway/appSpec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9667,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
	
	//Plugins taken from http://forum.ionicframework.com/t/unit-tests-for-ionic/3711/5  
	plugins: [
   'karma-chrome-launcher',
   'karma-jasmine'
	],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
