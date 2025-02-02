const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Error extends Page {
    /**
     * define selectors using getter methods
     */
    get verifyError () {
        return $("//h3[contains(text(), 'Epic sadface: Sorry, this user has been locked out.')]");
    }
}

module.exports = new Error();
