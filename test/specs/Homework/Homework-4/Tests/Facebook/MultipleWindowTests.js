const { expect } = require("chai");
const moment = require('moment');

const LoginPage = require('../../POM/Facebook/LoginPage');
const OculusHomePage = require('../../POM/Facebook/OculusHomePage');

describe('Facebook Multiple Windows Test Suite', () => {

    it.only ('TC-1 Verify the Oculus page is launched in new window', async () => {

        /**
         * TC-1
         * 1. Launch facebook.com
         * 2. Click on Oculus
         * 3. Verify Support tab is displayed
         * 4. Verify the Oculus page is launched in new window
         * 
         */

         const loginPage = new LoginPage();
         const oculusHomePage = new OculusHomePage();

        // 1. Launch https://www.facebook.com/
        await browser.url('https://www.facebook.com/');

        // 2. Click on Oculus
        await loginPage.clickOculusLink();

        // Connect browser with Oculus window

        const fbHomePageLoginHandle = await browser.getWindowHandle();
        
        const allWindowHandles = await browser.getWindowHandles();
        

        for(const handle of allWindowHandles){
            if(handle !== fbHomePageLoginHandle){
                browser.switchToWindow(handle);
                break;
            }
        }

        await browser.pause(2000);


        // 3. Verify Support tab is displayed
        const isSupportDisplayed = await oculusHomePage.isSupportTabLinkDisplayed();
        expect (isSupportDisplayed, 'Support tab link is NOT displayed').to.be.true;
        

        // 4. Verify the Oculus page is launched in new window
        expect(allWindowHandles.length, 'The number of window handles is NOT 2').to.be.equal(2);
        
    });

    it ('TC-2 Close all windows except Meta Pay window',  async() => {

        /**
         * TC-2
         * 1. Launch facebook.com
         * 2. Click on Instagram
         * 3. Click on Portal
         * 4. Click on Oculus
         * 5. Click on Meta Pay
         * 6. Close all windows except 'Meta Pay' window
         * 7. Verify 'Using Meta Pay' is displayed
         * 8. Move mouse on 'Using Meta Pay'
         * 9. Verify 'Online Checkout' option is displayed
         */

         const loginPage = new LoginPage();

        // 1. Launch https://www.facebook.com/
        await browser.url('https://www.facebook.com/');

        // 2. Click on Instagram
        await loginPage.clickInstagramLink();

        // 3. Click on Portal
        await loginPage.clickPortalLink();

        // 4. Click on Oculus
        await loginPage.clickOculusLink();

        // 5. Click on Meta Pay

        await loginPage.clickMetaPayLink();

        // 6. Close all windows except 'Meta Pay' window

        const allWindowHandles = await browser.getWindowHandles();

        for(const handle of allWindowHandles){

            await browser.switchToWindow(handle);
            let pageTitle = await browser.getTitle();
            if(!pageTitle.startsWith('Meta Pay')){
                await browser.closeWindow();
            }

        }

        await browser.pause(7000);

        
    });
    
});