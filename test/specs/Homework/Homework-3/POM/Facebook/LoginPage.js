const Commands = require('../Commands');

class LoginPage{

    commands = new Commands();

    //Locators for web-Elements on the Facebook LoginPage

    loginEmailLocator = '//input[@id="email"]';
    loginPasswordLocator = '//input[@id="pass"]';
    loginButtonLocator = '//button[@name="login"]';
    createNewAccountButtonLocator = '//a[text()="Create new account" or text()="Create New Account"]';
    messengerLinkLocator = '//a[text()="Messenger"]';

    // Functions to interact with the web-Elements on the Facebook LoginPage

    async enterLoginEmail(userEmail){
        await this.commands.typeInWebElement(loginEmailLocator, userEmail);
    }

    async enterLoginPassword(userPwd){
        await this.commands.typeInWebElement(this.loginPasswordLocator, userPwd);
    }

    async clickLoginButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }

    async clickCreateNewAccountButton(){
        await this.commands.clickWebElement(this.createNewAccountButtonLocator);
    }

    async clickMessengerLink(){
        await this.commands.clickWebElement(this.messengerLinkLocator);
    } 







}
module.exports = LoginPage;