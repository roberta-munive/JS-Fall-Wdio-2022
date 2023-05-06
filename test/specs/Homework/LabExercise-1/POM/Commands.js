




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
     * Generic function to find multiple WebElements
     * - WebDriverIO $$ function
     */
     async findMultipleWebElements (locator){
        return await $$(locator);

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

    /**
     * Generic function to get window handle
     * name: getHandle
     * 
     */  
     async getHandle() {
        return await browser.getWindowHandle();
    }

    /**
     * Generic function to get ALL window handle
     * name: getHandles
     * 
     */  
    async getHandles() {
        return await browser.getWindowHandles();
    }

    /**
     * Generic function to switch to a new handle
     * name: switchToWindowHandle
     * input: newHandle
     * 
     */  
     async switchToWindowHandle(newHandle) {
        return await browser.switchToWindow(newHandle);
    }

    /**
     * Generic function to select data in dropdown (using Visible text)
     * name: selectDataInDropdown
     * input: locatorDropdown, valueWantToSelect
     */
     async selectDataInDropdown(locator, dataToSelect) {
        const dropdown = await $(locator);
        dropdown.selectByVisibleText(dataToSelect);
    }



    /**
     * Generic function to select value from auto-suggestion using getText
     * name: selectFromAutoSuggestion
     * input: locator (for all suggestions), userLikeToSelect
     */
     async selectFromAutoSuggestion(locator, userLikeToSelect) {
        const allSuggestions = await $$(locator);
        for (const suggestion of allSuggestions) {
            const webText = await suggestion.getText();
            if (webText.toLowerCase().localeCompare(userLikeToSelect.toLowerCase()) === 0) {
                await suggestion.click();
                break;
            }
        }
    }

    /**
     * Generic function to select date from calendar using getAttribute
     * name: selectDateInCalendar
     * input: locator (for all dates), dateUserLikesToSelect
     */
    async selectDateInCalendar(locator, dateUserLikesToSelect) {
        const allDates = await $$(locator);     // [we1, we2, we3, we4, ...]
        
        for (const dateElement of allDates) {
            const dataDayValue = await dateElement.getAttribute('data-day');
            if (dataDayValue.localeCompare(dateUserLikesToSelect) === 0) {
                await dateElement.click();
                break;
            }
        }
    }

    




}
module.exports = Commands;