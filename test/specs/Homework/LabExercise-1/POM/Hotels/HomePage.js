const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class HomePage{

    commands = new Commands();

    // Locators for webElements on the Hotels.com HomePage

    //Calendar
    calendarOpenLocator = '//button[@id="date_form_field-btn"]';
    leftSideCalendarHeaderLocator = '(//div[@data-stid="date-picker-month"]//h2)[1]';
    allDatesLocator_starts = '//button[starts-with(@aria-label, "';
    allDatesLocator_ends = '")]';
    allDisabledDatesLocator_starts = '//button[starts-with(@aria-label, "';
    allDisabledDatesLocator_ends = '") and @disabled]';

    // functions to interact with the webElements on the Hotels.com HomePage

    async openCalendar(){
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async findNumberOfDisabledDatesForCurrentMonth( ){

        const currentMonth = await Dates.getCurrentMonthNameAbbr();

        const allDisabledDatesLocator = this.allDisabledDatesLocator_starts + currentMonth + this.allDisabledDatesLocator_ends;
        const allDisabledDates = await this.commands.findMultipleWebElements(allDisabledDatesLocator);
        
        return allDisabledDates.length;
        
    }


}
module.exports = HomePage;