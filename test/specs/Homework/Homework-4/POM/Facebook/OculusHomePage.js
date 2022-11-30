const Commands = require('../Commands');

class OculusHomePage {
    commands = new Commands();

    //Locators for web-Elements on the OculusHomePage

    supportTabLocator = '//span[text()="Support"]';

    // Functions to interact with the web-Elements on the Facebook LoginPage

    async isSupportTabLinkDisplayed(){
        return await this.commands.isWebElementDisplayed(this.supportTabLocator);
    } 




}
module.exports = OculusHomePage;