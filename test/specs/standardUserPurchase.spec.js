const homePage = require("../pageobjects/home.page");
const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const cartPage = require("../pageobjects/cart.page");
const checkoutPage = require("../pageobjects/checkout.page");
const checkout_overviewPage = require("../pageobjects/checkout_overview.page");
const checkout_completePage = require("../pageobjects/checkout_complete.page");
const assert = require('assert');



describe('Purchase Journey for Standard User', () => {
    it('should complete the purchase', async () => {
         await LoginPage.open()
        
         await LoginPage.login('standard_user', 'secret_sauce')
         await homePage.resetApp()
         await homePage.addProductsToCart(3)
         await homePage.gotoCart()
         await cartPage.checkout()

         await checkoutPage.fillForm('John', 'Doe', '12345')
         await checkoutPage.continueClick()
        await checkout_overviewPage.finish()
        const completeMessage = await checkout_completePage.getCompleteMessage()
        assert.strictEqual(completeMessage, 'Thank you for your order!');
        await homePage.resetApp()
        await homePage.logoutUser()





    });
});