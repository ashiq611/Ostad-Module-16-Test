const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page{
    get hamburgerMenu() { return $("//button[@id='react-burger-menu-btn']"); }
    get resetAppState() { return $("//a[@id='reset_sidebar_link']"); }
    get logout() { return $("//a[@id='logout_sidebar_link']"); }
    get hamburgerMenuClose() { return $("//button[@id='react-burger-cross-btn']"); }
    get addToCartButtons() { return $$("//button[@id='add-to-cart-sauce-labs-backpack']"); }
    get cartIcon() { return $('.shopping_cart_link'); }

    async resetApp(){
        await this.hamburgerMenu.click();
        await this.resetAppState.click();
        await this.hamburgerMenuClose.click();
    }

    async addProductsToCart(count = 3) {
        
        for (let i = 0; i < count && i < this.addToCartButtons.length; i++) {
            await this.addToCartButtons[i].click();
        }
    }

    async gotoCart() {
        await this.cartIcon.click();
    }

    async logoutUser(){
        await this.logout.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new HomePage();