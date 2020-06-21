const CelsiusToFahrenheitConvertorPage = require('./../../pages/celsiusToFahrenheitConvertor.page');
const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();
const assert = require('assert');

describe('verify the C to F temperature', () => {
    beforeEach(() => {
        celsiusToFahrenheitConvertorPage.launchApp();
    });
    it('to verify if 1 celcius is equal to 33.8', () => {
        celsiusToFahrenheitConvertorPage.enterCelsius('1');
        const fahrenheitValue = celsiusToFahrenheitConvertorPage.getFahrenheitValue();
        assert.equal(fahrenheitValue, '33.8');
    });

});
