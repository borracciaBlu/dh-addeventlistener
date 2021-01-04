const pkg = require('../../package.json');
const assert = require('assert');

let baseUrl = "https://borracciablu.github.io/dh-addeventlistener/test/v" + pkg.version + "/index.html";

describe('dh-addeventlistener', () => {
    it('should have no errors', () => {
        browser.url(baseUrl);

        const failures =  browser.$('.failures');
        const text =  failures.getText();
        assert.equal(text, 'failures: 0');
    });
});


