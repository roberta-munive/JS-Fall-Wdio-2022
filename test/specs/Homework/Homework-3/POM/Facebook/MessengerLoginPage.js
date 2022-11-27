const Commands = require('../Commands');

class MessengerLoginPage {

    commands = new Commands();

    //Locators for web-Elements on the MessengerLoginPage

    keepMeSignedInCheckboxLocator = '//input[@type="checkbox"]';
    loginButtonLocator = '//button[@id="loginbutton"]';



    // Functions to interact with the web-Elements on the MessengerLoginPage

    async isKeepMeSignedInCheckBoxSelected() {
        return await this.commands.isWebElementSelected(this.keepMeSignedInCheckboxLocator);

    }

    async clickLoginButton(){
        await this.commands.clickWebElement(this.loginButtonLocator);
    }

}
module.exports = MessengerLoginPage;