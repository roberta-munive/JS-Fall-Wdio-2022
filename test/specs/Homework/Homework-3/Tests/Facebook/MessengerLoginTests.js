const { expect } = require("chai");
const moment = require('moment');

const LoginPage = require('../../POM/Facebook/LoginPage');
const MessengerLoginPage = require("../../POM/Facebook/MessengerLoginPage");
const MessengerLoginErrorPage = require("../../POM/Facebook/MessengerLoginErrorPage");

describe('Messenger Login Test Suite', () => {

    it('TC-3 Verify user gets error when submit empty login on messenger screen', async () => {

        /**
        * TC-3: https://www.facebook.com/
        * Facebook: Verify user gets error when submit empty login on messenger screen
        * 
        * 1. Launch https://www.facebook.com/
        * 2. Click Messenger
        * 3. Verify "Keep me signed in" is NOT selected
        * 4. Click "Log in" button
        * 5. Verify link (Find your account and log in.) is displayed
        * 6. Verify "Continue" button is enabled
        * 7. Verify "Keep me signed in" is NOT selected
        * 8. Click "Keep me signed in" checkbox
        * 9. Verify "Keep me signed in" is selected
        * 
        */

         const loginPage = new LoginPage();
         const messengerLoginPage = new MessengerLoginPage();
         const messengerLoginErrorPage = new MessengerLoginErrorPage();

        // 1. Launch Facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click Messenger
        await loginPage.clickMessengerLink();
        await browser.pause(7000);

        // 3. Verify "Keep me signed in" is NOT selected

        const isCheckBoxSelected = await messengerLoginPage.isKeepMeSignedInCheckBoxSelected();

        await browser.pause(7000);

        expect(isCheckBoxSelected, 'Keep me signed in check box is selected, but expected it to NOT be selected').to.be.false;

        // 4. Click "Log in" button

        messengerLoginPage.clickLoginButton();

        await browser.pause(7000);

        // 5. Verify link (Find your account and log in.) is displayed

        const isErrorMsgLinkDisplayed = await messengerLoginErrorPage.isLoginErrorMessageLinkDisplayed();

        expect(isErrorMsgLinkDisplayed, 'Find your account link is NOT displayed').to.be.true;

        // 6. Verify "Continue" button is enabled

        const isContinueBtnEnabled = await messengerLoginErrorPage.isContinueButtonEnabled();
        expect(isContinueBtnEnabled, 'Continue button is NOT enabled').to.be.true;

        await browser.pause(7000);

        // 7. Verify "Keep me signed in" is NOT selected

        const isCheckBoxSelected2 = await messengerLoginErrorPage.isKeepMeSignedInCheckBoxSelected();

        await browser.pause(7000);

        expect(isCheckBoxSelected2, 'Keep me signed in check box is selected, but expected it to NOT be selected').to.be.false;

        // 8. Click "Keep me signed in" checkbox

        await messengerLoginErrorPage.clickKeepMeSignedInCheckBox2();

        const isCheckBoxSelected3 = await messengerLoginErrorPage.isKeepMeSignedInCheckBoxSelected();

        await browser.pause(7000);

        expect(isCheckBoxSelected3, 'Keep me signed in check box is selected, but expected it to NOT be selected').to.be.true;


        
    });
    
});