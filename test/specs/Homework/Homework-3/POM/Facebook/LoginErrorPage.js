const Commands = require('../Commands');

class LoginErrorPage{

    commands = new Commands();

    //Locators for web-Elements on the Facebook LoginErrorPage
    loginErrorMsgLocator = '//div[@id="email_container"]/div[starts-with(text(), "The email or mobile")]';

    
    // Functions to interact with the web-Elements on the LoginErrorPage
    async loginErrorMsgText (){
        return await $(this.loginErrorMsgLocator).getText();
        
    }

    


}
module.exports = LoginErrorPage;