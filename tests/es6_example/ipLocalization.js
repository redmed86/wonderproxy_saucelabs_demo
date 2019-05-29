const expect = require('chai').expect;

describe('IP Localization', function() {

    it("Check for Indian IP address", function() {
        //Navigate to What's My IP page
        browser.url('https://www.whatsmyip.org/')
        //Find and click on more info link
        const myInfoLink = $('body > div > div > main > section.bit_more_info > p:nth-child(4) > a');
        myInfoLink.click();
        //Scroll to info section
        browser.scroll('body > div > div > main > section:nth-child(2) > h2');
    });
});