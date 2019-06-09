exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './specs/**/*Spec.js'
    ],
    baseUrl: 'https://the-internet.herokuapp.com',
  }