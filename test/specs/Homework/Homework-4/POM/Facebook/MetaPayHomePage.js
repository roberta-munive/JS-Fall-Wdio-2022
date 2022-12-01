const Commands = require('../Commands');

class MetaPayHomePage{

    commands = new Commands();

    //Locators for web-Elements on the Meta Pay Home Page

    usingMetaPayTabLocator = '(//a[text()="Using Meta Pay"])[1]';
    onlineCheckoutOptionLocator = '(//a[text()="Online Checkout"])[1]';

    // Functions to interact with the web-Elements on the Meta Page Home Page

    async isUsingMetaPayTabLinkDisplayed(){
        return await this.commands.isWebElementDisplayed(this.usingMetaPayTabLocator);
    } 

    async getTextFromUsingMetaPayTabLink(){
        return await this.commands.getTextOfWebElement(this.usingMetaPayTabLocator);
    }

    async moveMouseToUsingMetaPayTab(){
        return await this.commands.getTextOfWebElement(this.usingMetaPayTabLocator);
    }

    async getTextFromOnlineCheckoutOption(){
        return await this.commands.getTextOfWebElement(this.onlineCheckoutOptionLocator);
    }

    async isOnlineCheckoutOptionDisplayed(){
        return await this.commands.isWebElementDisplayed(this.onlineCheckoutOptionLocator);
    } 




    




}
module.exports = MetaPayHomePage;

