const ActionHelper = require('./../helpers/actionHelpers');

class SettingsPage{

    getObjectLocator(){
        return require(`./../screens/native/${browser.capabilities.platformName}/settings.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(2);
    }

    getGeneralTabText() {
        return ActionHelper.getText(this.getObjectLocator().general);
    }
}

module.exports = SettingsPage;
