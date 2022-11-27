const { expect } = require("chai");
const moment = require('moment');
const DarkskyHomePage = require("../../POM/Darksky/DarkskyHomePage");


describe('DarkSky Temperature Test Suite', () => {

    it('TC-4 Verify feels-like temperature value is in between low temperature value and high temperature value', async () => {

        const darkskyHomePage = new DarkskyHomePage();

        
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

        await darkskyHomePage.enterTextInZipCodeSearchBox('85288');
        await browser.pause(2000);

        // 3. Click on search button

        await darkskyHomePage.clickOnSearchButton();
        await browser.pause(2000);

        // 4. Verify the 'feels like temp' value is in between the low temperature  value and the high temperature value

        const feelsLikeTempStr = await darkskyHomePage.getTextFromFeelsLikeTemp();
        const feelsLikeTempNum = Number(feelsLikeTempStr.split('˚')[0]);

        const lowTempStr = await darkskyHomePage.getTextFromLowTemp();
        const lowTempNum = Number(lowTempStr.split('˚')[0]);

        const highTempStr = await darkskyHomePage.getTextFromHighTemp();

        const highTempNum = Number(highTempStr.split('˚')[0]);

        const isFeelsLikeInBetweenLowAndHigh = lowTempNum < feelsLikeTempNum && feelsLikeTempNum < highTempNum;

        expect(isFeelsLikeInBetweenLowAndHigh, 'Feels Like temperature is NOT in between the low temperature and the high temperature').to.be.true;
        
    });
    
});