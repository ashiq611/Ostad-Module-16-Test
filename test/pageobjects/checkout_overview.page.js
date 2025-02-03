const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutOverviewPage extends Page{
    get finishButton() { return $("//button[@id='finish']"); }

    async finish(){
        await this.finishButton.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new CheckoutOverviewPage();