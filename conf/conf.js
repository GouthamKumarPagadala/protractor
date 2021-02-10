var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('project.properties');

exports.config = {
  chromeDriver: '..//node_modules//webdriver-manager//selenium//chromedriver_88.0.4324.96',
  getPageTimeout: properties.get('getPageTimeout'),
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  directConnect: properties.get('directConnect'),
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //For direct jasmine spec
  // Framework to use. Jasmine is recommended.
  //framework: 'jasmine',
  //specs: ['./testcases/example_spec.js'],

  capabilities: {
    browserName: 'chrome'//,
    //chromeOptions: {
    // args: [ "--headless", "--no-sandbox","--disable-gpu", "--window-size=800,600" ]
    // }
  },
  //For cucumber
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['..\\features\\*.feature'],
  cucumberOpts: {
    tags: false,
    format: 'json:report/results.json',
        strict: true,
    require: [
      '..\\features\\stepDefinitions\\*.js'
    ]
  },

  // Capabilities to be passed to the webdriver instance.
  //multiCapabilities:[ {
  //  'browserName': 'chrome'
  //}
  //, {
  //  'browserName': 'firefox'
  //}
  //],

  //maxSessions:1,

  /*plugins:[{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options:{
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      reportName:'CucumberJS Report',
      pageFooter:'<div>Generated by Automation</div>',
      pageTitle:'Test Automation',
      customData:{
        title:'Execution Info',
        data:[

          {label:'Release',value:'1.2.3'}
        ]

      },
      displayDuration:true
    }
  }],*/
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  seleniumServerStartTimeout: 90000,
  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
};
