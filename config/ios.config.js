const {config} = require('./wdio.conf');
const iosInfo = require('./ios.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        automationName: 'XCUITest',
        noReset: true,
        fullReset: false,
        deviceName: iosInfo.deviceName,
        platformVersion: iosInfo.platformVersion,
        app: iosInfo.app
    }
];

config.specs = [
    './src/specs/iosNative/**/*.js'
];

exports.config = config;

