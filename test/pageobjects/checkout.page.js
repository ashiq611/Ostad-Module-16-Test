const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutPage extends Page{
    get firstName() { return $("//input[@id='first-name']"); }
    get lastName() { return $("//input[@id='last-name']"); }
    get postalCode() { return $("//input[@id='postal-code']"); }
    get continueButton() { return $("//input[@id='continue']"); }

    async fillForm(firstName, lastName, postalCode){
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalCode);
    }

    async continueClick(){
        await this.continueButton.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new CheckoutPage();