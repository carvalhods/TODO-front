exports.config = {

  getPageTimeout: 60000,

  allScriptsTimeout: 500000,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    'browserName': 'chrome'
  },

  specs: [
    './tests/features/*.feature'
  ],

  cucumberOpts: {
    require: '../tests/features/step_definitions/*.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  },

  onPrepare: function() {
    browser.manage().window().maximize();
  }

}
