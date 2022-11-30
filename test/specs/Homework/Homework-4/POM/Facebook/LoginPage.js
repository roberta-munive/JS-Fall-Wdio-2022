const Commands = require('../Commands');

class LoginPage{

    commands = new Commands();

    //Locators for web-Elements on the Facebook LoginPage

    oculusLinkLocator = '//a[text()="Oculus"]';
    instagramLinkLocator = '//a[text()="Instagram"]';
    portalLinkLocator = '//a[text()="Portal"]';
    metaPayLinkLocator = '//a[text()="Meta Pay"]';



    // Functions to interact with the web-Elements on the Facebook LoginPage

    async clickOculusLink(){
        await this.commands.clickWebElement(this.oculusLinkLocator);
    } 

    async clickInstagramLink(){
        await this.commands.clickWebElement(this.instagramLinkLocator);
    }

    async clickPortalLink(){
        await this.commands.clickWebElement(this.portalLinkLocator);
    }

    async clickMetaPayLink(){
        await this.commands.clickWebElement(this.metaPayLinkLocator);
    }




}
module.exports = LoginPage;