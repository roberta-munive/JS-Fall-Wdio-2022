const Commands = require('../Commands');

class MessengerLoginErrorPage {

    commands = new Commands();

    //Locators for web-Elements on the MessengerLoginErrorPage

    loginErrorMessageLinkLocator = '//a[text()="Find your account and log in."]';
    continueButtonLocator = '//button[@id="loginbutton"]';
    keepMeSignedInCheckboxLocator = '//input[@type="checkbox"]';
    keepMeSignedInCheckbox2Locator = '//label[@class="uiInputLabelInput"]';


    // Functions to interact with the web-Elements on the MessengerLoginErrorPage

    async isLoginErrorMessageLinkDisplayed(){
        return await this.commands.isWebElementDisplayed(this.loginErrorMessageLinkLocator);
    }

    async isContinueButtonEnabled(){
        return await this.commands.isWebElementEnabled(this.continueButtonLocator);
    }

    async isKeepMeSignedInCheckBoxSelected(){
        return await this.commands.isWebElementSelected(this.keepMeSignedInCheckboxLocator);
    }

    async clickKeepMeSignedInCheckBox2(){
        return await this.commands.clickWebElement(this.keepMeSignedInCheckbox2Locator);
    }



   


}
module.exports =MessengerLoginErrorPage;