const { expect } = require("chai");
const moment = require('moment');

const LoginPage = require('../../POM/Facebook/LoginPage');
const SignUpPage = require('../../POM/Facebook/SignUpPage');
const Dates = require('../../Utils/Dates');

//const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');


describe('Facebook Sign Up Test Suite', () => {

    it('TC-1 Facebook: Verify current date is displayed on sign-up form', async () => {

        /**
         * TC-1: https://www.facebook.com/
         * Facebook: Verify current date is displayed on Sign-Up form
         * 
         * Steps:
         * 1. Launch facebook.com
         * 2. Click Create New Account button
         * 3. Verify current date is displayed in Date of birth dropdowns
         * 
         */

        const loginPage = new LoginPage();
        const signupPage = new SignUpPage();
        const dates = new Dates();

        // 1. Launch Facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click Create New Account button
        await loginPage.clickCreateNewAccountButton();

        await browser.pause(7000);

        // 3. Verify current date is displayed in Date of birth dropdowns

        // Get current date
        let currentDate = dates.getCurrentMonthNameAbbr().toUpperCase();
        currentDate += dates.getCurrentDate();
        currentDate += dates.getCurrentYearIn4Digits();
        
        //select month dropdown and get currently selected month

        const currentlySelectedFromMonthDropdown = await signupPage.getTextFromMonthDropDown();

        let completeActualDate = currentlySelectedFromMonthDropdown.toUpperCase();

        //select day dropdown and get currently selected day

        const currentlySelectedFromDayDropdown = await signupPage.getTextFromDayDropDown();

        completeActualDate += currentlySelectedFromDayDropdown;

        //select year dropdown and get currently selected year

        const currentlySelectedFromYearDropdown = await signupPage.getTextFromYearDropDown();
        completeActualDate += currentlySelectedFromYearDropdown;

        await browser.pause(7000);

        expect(completeActualDate, 'Current date not displayed in birthday dropdown').to.equal(currentDate);
        









        
    });
    
});
