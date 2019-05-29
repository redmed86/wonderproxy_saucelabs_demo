const expect = require('chai').expect;

describe('IP Localization', function() {

    it("Check for Indian IP address", function() {
        browser.url('https://www.whatsmyip.org/')
        const link = $('body > div > div > main > section.bit_more_info > p:nth-child(4) > a');
        const serverInfo = $('body > div > div > main > section:nth-child(2) > h2')
        link.click();
        browser.scroll('body > div > div > main > section:nth-child(2) > h2');
    });
});