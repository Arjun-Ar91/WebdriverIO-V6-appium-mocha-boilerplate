const GooglePage = require('./../../pages/google.page');
const googlePage = new GooglePage();
const assert = require('assert');

describe('verify the google browser page', () => {
    it('to verify the title of google page', () => {
        googlePage.launchGoogle();
        assert.equal(googlePage.getGoogleTitle(), 'Google');
    });
});
