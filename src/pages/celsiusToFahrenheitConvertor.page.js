const ActionHelper = require('./../helpers/actionHelpers');

class CelsiusToFahrenhietConvertorPage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/`
            + 'celsiusToFahrenheitConvertor.screen.js');
    }

    dismissAppRatingIfPresent() {
        if (ActionHelper.isVisible(this.getObjectLocator().rateAppMessage)) {
            ActionHelper.click(this.getObjectLocator().laterButton);
        }
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    enterCelsius(celsiusValue) {
        this.dismissAppRatingIfPresent();
        ActionHelper.waitForElement(this.getObjectLocator().celsiusTextField, 4);
        ActionHelper.clearText(this.getObjectLocator().celsiusTextField);
        ActionHelper.sendText(this.getObjectLocator().celsiusTextField, celsiusValue);
        ActionHelper.click(this.getObjectLocator().submitButton);
    }

    getFahrenheitValue() {
        ActionHelper.waitForElement(this.getObjectLocator().fahrenheitTextField, 4);
        return ActionHelper.getText(this.getObjectLocator().fahrenheitTextField);
    }
}

module.exports = CelsiusToFahrenhietConvertorPage;
