const { Browser } = require("puppeteer-core");



class Commands {
 
    // contains generic functions for functions used within WebDriverIO
    // contains customized functions using WebDriverIO functions
    
    
   
    // selectByAttribute
    // selectByIndex
    // selectByVisibleText

    /**
     * Generic function to find WebElement
     * - WebDriverIO $ function
     */
      async findWebElement (locator){
        return await $(locator);

      }

    /**
     * Generic function to click a WebElement
     * - WebDriverIO click function
     *  */  

    async clickWebElement (locator){
        await $(locator).click();

    }

    /**
     * Generic function to get attribute value of a WebElement
     * - WebDriverIO getAttribute function
     */

    async getAttributeOfWebElement(locator, attributeName){
        return await $(locator).getAttribute(attributeName);
    }


    /**
     * Generic function to get text of a WebElement
     * - WebDriverIO getText function
     */

    async getTextOfWebElement(locator){
        return await $(locator).getText();
    }

    /**
     * Generic function to determine if a WebElement is displayed
     * - WebDriverIO isDisplayed function
     */

     async isWebElementDisplayed(locator){
        return await $(locator).isDisplayed();
    }

    /**
     * Generic function to determine if a WebElement is enabled
     * - WebDriverIO isEnabled function
     */

     async isWebElementEnabled(locator){
        return await $(locator).isEnabled();
    }



    /**
     * Generic function to determine if a WebElement is selected
     * - WebDriverIO isSelected function
     */

    async isWebElementSelected(locator){
        return await $(locator).isSelected();
    }

    
    
    /**
     * Generic function to enter data in a WebElement
     * - Locates WebElement and types data into it
     * - WebDriverIO setValue function
     */

    async typeInWebElement (locator, dataToEnter){
        await $(locator).setValue(dataToEnter);

    }

    /**
     * Generic function to move to a WebElement
     * - WebDriverIO moveTo function
     *  */  

     async moveToWebElement (locator){
        await $(locator).moveTo();

    }

    




}
module.exports = Commands;