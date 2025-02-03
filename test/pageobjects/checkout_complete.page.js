const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutCompletedPage extends Page{
   get completeMessage() { return $("//h2[contains(@class, 'complete-header')]"); }

    async getCompleteMessage(){
        return await this.completeMessage.getText();
    }

    open () {
        return super.open('');
    }
}

module.exports = new CheckoutCompletedPage();