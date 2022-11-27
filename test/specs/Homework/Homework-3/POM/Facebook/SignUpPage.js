const Commands = require('../Commands');

class SignUpPage {

    commands = new Commands();

    //Locators for web-Elements on the Facebook SignUpPage

    currentlySelectedFromMonthDropdownLocator = '//select[@id="month"]/option[@selected]';

    currentlySelectedFromDayDropdownLocator = '//select[@id="day"]/option[@selected]';

    currentlySelectedFromYearDropdownLocator = '//select[@id="year"]/option[@selected]';

    

    // Functions to interact with the web-Elements on the SignUpPage

    async getTextFromMonthDropDown (){
        return await this.commands.getTextOfWebElement(this.currentlySelectedFromMonthDropdownLocator);
    }

    async getTextFromDayDropDown (){
        return await this.commands.getTextOfWebElement(this.currentlySelectedFromDayDropdownLocator);
    }

    async getTextFromYearDropDown (){
        return await this.commands.getTextOfWebElement(this.currentlySelectedFromYearDropdownLocator);
    }

    



}
module.exports = SignUpPage;