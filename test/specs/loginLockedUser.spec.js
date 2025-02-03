const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(SecurePage.verifyError).toBeExisting()
        await expect(SecurePage.verifyError).toHaveText(
            expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'))
    })
    it('verify purchase journey and verify the successful order message.')
})

