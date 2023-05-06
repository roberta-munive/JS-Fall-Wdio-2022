const { expect } = require("chai");
const moment = require('moment');

const HomePage = require('../../POM/Hotels/HomePage');
const Dates = require('../../Utils/Dates');


describe('Hotels Calendar Test Suite', () => {

    it('Verify the past dates are disabled in calendar', async () => {

        /**
         * 1. Launch hotels.com
         * 2. Verify past dates are disabled in calendar
         * 
         */

        const homePage = new HomePage();

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');

        // 2. Verify past dates are disabled in calendar

        /**
         * 2a. Find all dates for the current month
         * 2b. Determine how many of those dates are actually disabled
         * 2c. Expect the total number of disabled dates to equal todaysDate - 1
         */
        await homePage.openCalendar();
        await browser.pause(1000);

        // 2a. Find all dates for the current month
        const totalDisabledDatesThisMonth = await homePage.findNumberOfDisabledDatesForCurrentMonth();
        const currentDate = Dates.getCurrentDate();

        expect(totalDisabledDatesThisMonth, 'Total number of disabled dates is not as expected').to.equal(currentDate-1);
        
    });
    
});