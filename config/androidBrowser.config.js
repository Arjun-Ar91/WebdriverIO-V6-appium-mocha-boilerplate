const {config} = require('./wdio.conf');
const androidInfo = require('./android.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'chrome',
        automationName: 'uiautomator2',
        maxInstances: 1,
        deviceName: androidInfo.deviceName,
        platformVersion: androidInfo.platformVersion
    }
];

config.specs = [
    './src/specs/mobileBrowser/**/*.js'
];

exports.config = config;

