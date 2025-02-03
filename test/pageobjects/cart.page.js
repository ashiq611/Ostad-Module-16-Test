const { $ } = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page{
    get checkoutButton() { return $("//button[@id='checkout']"); }

    async checkout(){
        await this.checkoutButton.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new CartPage();