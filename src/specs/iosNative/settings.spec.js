const SettingsPage = require('./../../pages/settings.page');
const settingsPage = new SettingsPage();
const assert = require('assert');

describe('verify the iphones settings app', () => {
    beforeEach(() => {
        settingsPage.launchApp();
    });
    it('to verify the general tab text', () => {
        const GeneralTabText = settingsPage.getGeneralTabText();
        assert.equal(GeneralTabText, 'General');
    });
});
