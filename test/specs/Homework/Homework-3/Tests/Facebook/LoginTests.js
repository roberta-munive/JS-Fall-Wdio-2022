
const { expect } = require("chai");
const moment = require('moment');

const LoginPage = require('../../POM/Facebook/LoginPage');
const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');
const { command } = require("yargs");

describe('Facebook Login Test Suite', () => {

    
    
    it('TC-2 Verify user gets error when submits empty login form', async() => {

        const loginPage = new LoginPage();
        const loginErrorPage = new LoginErrorPage();

        /**
         * 1. Launch https://www.facebook.com/
         * 2. Click Login button
         * 3. Verify the expected error msg -> The email address or mobile number you entered isn't connected to an account.  
         * 
         * 
         */

        // 1. Launch https://www.facebook.com/
        await browser.url('https://www.facebook.com/');

        // 2. Click Log In button
        await loginPage.clickLoginButton();
        await browser.pause(7000);

        //3. Verify the expected error msg -> The email address or mobile number you entered isn't connected to an account. Find your account and log in.

        const actualErrorMsg = await loginErrorPage.loginErrorMsgText();
        await browser.pause(7000);

        const expectedErrorMsg = "The email or mobile number you entered isn’t connected to an account. Find your account and log in."

        expect (actualErrorMsg, 'The error message when submitting an empty login form is NOT as expected').to.equal(expectedErrorMsg);

        
    });
    
});