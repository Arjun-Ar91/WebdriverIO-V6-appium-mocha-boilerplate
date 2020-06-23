const ActionHelper = require('./../helpers/actionHelpers');

class GooglePage {

    getObjectLocator() {
        return require('./../screens/web/google.screen.js');
    }

    launchGoogle() {
        ActionHelper.launchBrowserUrl(this.getObjectLocator().googleUrl);
        ActionHelper.pause(2);
    }

    getGoogleTitle() {
        return ActionHelper.getTitle();
    }
}

module.exports = GooglePage;
