
const { expect } = require("chai");
const { describe, it } = require("mocha");
const { Browser } = require("puppeteer-core");

describe('Gender Radio Button Selection Test Cases', () => {

    

    it('TC-1 Verify gender radio buttons not selected then select female gender radio button', async () => {

        /**
        * TC-1:
        * Steps:
        * 1. Launch facebook.com
        * 2. Click Create New Account button
        * 3. Verify female-gender button is not selected
        * 4. Verify male-gender button is not selected
        * 5. Verify custom-gender button is not selected
        * 6. If female gender is NOT selected, then click on female gender radio button
        * 7. Verify female-gender button is selected
        */

        // 1. Launch facebook.com
        await browser.url('/');

        //2. Click Create New Account button
        const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(7000);

        //3. Verify female-gender button is not selected
        const femaleRadioBtn = await $('input[value="1"]');
        let isFemaleGenderSelected = await femaleRadioBtn.isSelected();
        expect(isFemaleGenderSelected, 'Female gender button is already selected').to.be.false;

        await browser.pause(7000);

        //4. Verify male-gender button is not selected
        const maleRadioBtn = await $('input[value="2"]');
        const isMaleGenderSelected = await maleRadioBtn.isSelected();
        expect(isMaleGenderSelected, 'Male gender button is already selected').to.be.false;

        await browser.pause(7000);

        //5. Verify custom-gender button is not selected
        const customRadioBtn = await $('input[value="-1"]');
        const isCustomGenderSelected = await customRadioBtn.isSelected();
        expect(isCustomGenderSelected, 'Custom gender button is already selected').to.be.false;

        await browser.pause(7000);

        //6. If female gender is NOT selected, then click on female gender radio button
        if(!isFemaleGenderSelected){
            femaleRadioBtn.click();
        }

        await browser.pause(7000);

        //7. Verify female-gender button is selected
        isFemaleGenderSelected = await femaleRadioBtn.isSelected();
        expect(isFemaleGenderSelected, 'Female gender button is already selected').to.be.true;

        await browser.pause(7000);









    })



})