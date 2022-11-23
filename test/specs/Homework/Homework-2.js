const { expect } = require("chai");
const moment = require('moment');





//Homework 2 - Roberta Munive

describe('Homework 2', () => {

    it ('TC-1 Facebook: Verify current date is displayed on sign-up form', async() => {

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

        // 1. Launch Facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click Create New Account button
        //const createNewAccountButton = await $('*=ccount');
        const createNewAccountButton = await $('//a[text()="Create new account" or text()="Create New Account"]');

        createNewAccountButton.click();

        await browser.pause(7000);

        //3. Verify current date is displayed in Date of birth dropdowns
        const now = moment();

        //get current date
        let currentDate = now.format('MMM').toUpperCase();
        currentDate += now.format('DYYYY');
        
        
        //select month dropdown and get currently selected month
        const currentlySelectedFromMonthDropdown = await $('//select[@id="month"]/option[@selected]').getText();
        let completeActualDate = currentlySelectedFromMonthDropdown.toUpperCase();

        //select day dropdown and get currently selected day
        const currentlySelectedFromDayDropdown = await $('//select[@id="day"]/option[@selected]').getText();
        completeActualDate += currentlySelectedFromDayDropdown

        //select year dropdown and get currently selected year
        const currentlySelectedFromYearDropdown = await $('//select[@id="year"]/option[@selected]').getText();
        completeActualDate += currentlySelectedFromYearDropdown


        await browser.pause(7000);

        expect(completeActualDate, 'Current date not displayed in birthday dropdown').to.equal(currentDate);
        
        
    });


    it ('TC-2 Verify user gets error when submits empty login form', async () => {

        /**
         * TC-2: Facebook: Verify user gets error when submits empty login form
         * 1. Launch https://www.facebook.com/
         * 2. Click Log In button
         * 3. Verify the expected error msg -> The email address or mobile number you entered isn't connected to an account. Find your account and log in.
         * 
         */

    // 1. Launch https://www.facebook.com/
    await browser.url('https://www.facebook.com/');

    // 2. Click Log In button
    const logInButton = await $('button[name=login]');
    logInButton.click();
    await browser.pause(7000);

    //3. Verify the expected error msg -> The email address or mobile number you entered isn't connected to an account. Find your account and log in.

    const actualErrorMsg = await $('//div[@id="email_container"]/div[starts-with(text(), "The email or mobile")]').getText();
    await browser.pause(7000);
    

    const expectedErrorMsg = "The email address or mobile number you entered isn't connected to an account. Find your account and log in."

    expect (expectedErrorMsg, 'The error message when submitting an empty login form is NOT as expected').to.equal(expectedErrorMsg);


   
        
    });


    it ('TC-3 Verify user gets error when submit empty login on messenger screen', async () => {

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

        // 1. Launch Facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click Messenger
        const messengerLink = await $('//a[text()="Messenger"]');
        messengerLink.click();

        await browser.pause(7000);

        // 3. Verify "Keep me signed in" is NOT selected

        const keepMeSignedInCheckbox = await $('//input[@type="checkbox"]');
        const isCheckBoxSelected = await keepMeSignedInCheckbox.isSelected();

        await browser.pause(7000);

        expect(isCheckBoxSelected, 'Keep me signed in check box is selected, but expected it to NOT be selected').to.be.false;

        // 4. Click "Log in" button
        const loginButton = await $('//button[@id="loginbutton"]');
        loginButton.click();

        await browser.pause(7000);

        // 5. Verify link (Find your account and log in.) is displayed

        const isErrorMsgLinkDisplayed = await $('//a[text()="Find your account and log in."]').isDisplayed();
        expect(isErrorMsgLinkDisplayed, 'Find your account link is NOT displayed').to.be.true;

        // 6. Verify "Continue" button is enabled

        const isContinueBtnEnabled = await $('//button[@id="loginbutton"]').isEnabled();
        expect(isContinueBtnEnabled, 'Continue button is NOT enabled').to.be.true;

        await browser.pause(7000);

        // 7. Verify "Keep me signed in" is NOT selected

        const keepMeSignedInCheckbox2 = await $('//input[@type="checkbox"]');
        const isCheckBoxSelected2 = await keepMeSignedInCheckbox2.isSelected();

        await browser.pause(7000);

        expect(isCheckBoxSelected2, 'Keep me signed in check box is selected, but expected it to NOT be selected').to.be.false;

        // 8. Click "Keep me signed in" checkbox

        await $('//label[@class="uiInputLabelInput"]').click();


        const keepMeSignedInCheckbox3 = await $('//input[@type="checkbox"]');
        const isCheckBoxSelected3 = await keepMeSignedInCheckbox3.isSelected();

        await browser.pause(7000);

        expect(isCheckBoxSelected3, 'Keep me signed in check box is selected, but expected it to NOT be selected').to.be.true;


    
        
    });


    it ('TC-4 Verify feels-like temperature value is in between low temperature value and high temperature value', async () => {

        /**
         * Steps:
         * 1. Launch https://www.darksky.net/
         * 2. Enter a zip code in the search box
         * 3. Click on search button
         * 4. Verify the 'feels like temp' value is in between the low temperature  value and the high temperature value 
         * */ 

        // 1. Launch https://www.darksky.net/

        await browser.url('https://darksky.net/');
        
        // 2. Enter a zip code in the search box
        const zipCodeSearchBox = await $('//input[@type="text"]');
        await zipCodeSearchBox.setValue('85288');

        await browser.pause(2000);

        // 3. Click on search button
        const searchButton = await $('//a[@class="searchButton"]');
        await searchButton.click();

        await browser.pause(2000);

        // 4. Verify the 'feels like temp' value is in between the low temperature  value and the high temperature value

        const feelsLikeTempWebElement = await $('//span[@class="feels-like-text"]');
        const feelsLikeTempStr = await feelsLikeTempWebElement.getText();

        const feelsLikeTempNum = Number(feelsLikeTempStr.split('˚')[0]);

        const lowTempWebElement = await $('//span[@class="low-temp-text"]');
        const lowTempStr = await lowTempWebElement.getText();

        const lowTempNum = Number(lowTempStr.split('˚')[0]);

        const highTempWebElement = await $('//span[@class="high-temp-text"]');
        const highTempStr = await highTempWebElement.getText();

        const highTempNum = Number(highTempStr.split('˚')[0]);

        const isFeelsLikeInBetweenLowAndHigh = lowTempNum < feelsLikeTempNum && feelsLikeTempNum < highTempNum;

        expect(isFeelsLikeInBetweenLowAndHigh, 'Feels Like temperature is NOT in between the low temperature and the high temperature').to.be.true;
    
        
    });

    



    
});