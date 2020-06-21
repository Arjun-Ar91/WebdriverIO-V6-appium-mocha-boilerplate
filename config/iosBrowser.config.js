const {config} = require('./wdio.conf');
const iosInfo = require('./ios.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        automationName: 'XCUITest',
        browserName: 'Safari',
        maxInstances: 1,
        deviceName: iosInfo.deviceName,
        platformVersion: iosInfo.platformVersion
    }
];

config.specs = [
    './src/specs/mobileBrowser/**/*.js'
];

exports.config = config;
