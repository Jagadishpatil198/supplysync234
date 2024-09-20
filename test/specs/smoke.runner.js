
import LoginPage from "../pageobjects/LoginPage.js";
import AdminHomePage from "../pageobjects/adminModule/adminHomePage.js";
import AddRetailerPage from "../pageobjects/adminModule/addRetailerPage.js";
import fs from "fs";
import AddManufacturePage from "../pageobjects/adminModule/addManufacturePage.js"
import AddProductsPage from "../pageobjects/adminModule/addProductPage.js";


let adminData=fs.readFileSync("./test/testData/Admincredentials.json")
let adminCred=JSON.parse(adminData)

describe('@smoke login as admin ',async()=>{
    let url=adminCred.url
    let adminName=await adminCred.adminName
    let adminPassword=await adminCred.adminPassword
    let adminVisbleText=await adminCred.adminVisibleText
   
    
    it("login as admin",async()=>{
    
        await browser.maximizeWindow();
          await browser.url("http://106.51.90.215/Build/Supply_Management_System/")
         
        
          await LoginPage.Login(adminName,adminPassword,adminVisbleText)
          await browser.pause(3000);
        let  currentwelcomeText= await AdminHomePage.Welcometext.getText();
         expect(currentwelcomeText).toEqual("Welcome Admin");
         await AdminHomePage.logoutButton.waitForClickable();
         await AdminHomePage.logoutButton.click();
         

       
        

    })
    
    it("addRetailer",async()=>{
    
        await browser.maximizeWindow();
          await browser.url("http://106.51.90.215/Build/Supply_Management_System/")
         
        
          await LoginPage.Login(adminName,adminPassword,adminVisbleText)
          await browser.pause(3000);
       
          await AdminHomePage.addRetailersLink.click();
          await AddRetailerPage.addretailer();
        //   await AddRetailerPage.userNameTextfield.setValue("jagadishp");
        //   await AddRetailerPage.passwordTextfield.setValue("JP198@bldea")
        //   await AddRetailerPage.areacodeDropdown.selectByVisibleText("MNGR (Maninagar)");
        //   await AddRetailerPage.phonenumberTextfield.setValue("9090909090");
        //   await AddRetailerPage.emailTextfield.setValue("jp@gmail.com");
        //   await AddRetailerPage.addressTextfield.setValue("bengaluru india");
        //   await AddRetailerPage.addRetailerButton.click();
        await browser.pause(3000);
          await AdminHomePage.logoutButton.waitForClickable();
          await AdminHomePage.logoutButton.click();
       
        

    })
    it("add Manufacturere",async()=>{
        await browser.maximizeWindow();
        await browser.url("http://106.51.90.215/Build/Supply_Management_System/"); 
        await LoginPage.Login(adminName,adminPassword,adminVisbleText)
        await browser.pause(3000);
        await AdminHomePage.addManufacturerLink.click();
        await AddManufacturePage.addManufactureName.setValue("kartik");
        await AddManufacturePage.addManufactureEmail.setValue("kartik@gmail.com");
        await AddManufacturePage.addManufacturePhonenumber.setValue("9080908090");
        await AddManufacturePage.addManufactureUsername.setValue("kartikk");
        await AddManufacturePage.addManufacturePassword.setValue("JP198@bldea");
        await AddManufacturePage.addManufactureButton.click();
        await AdminHomePage.logoutButton.waitForClickable();
        await AdminHomePage.logoutButton.click();
      
        
    })
    it("add products",async()=>{
        await browser.maximizeWindow();
        await browser.url("http://106.51.90.215/Build/Supply_Management_System/"); 
        await LoginPage.Login(adminName,adminPassword,adminVisbleText)
        await browser.pause(3000);
        await AdminHomePage.addProductLink.click();
        await AddProductsPage.productNameTextField.setValue("book");
        await AddProductsPage.priceNameTextfield.setValue(900);
        await AddProductsPage.unitTypeDropdown.selectByVisibleText("KG");
        await AddProductsPage.categoryDropdown.selectByVisibleText(" Counter Cakes ");
        await AddProductsPage.stockManagementRadioEnableButton.click();
        await AddProductsPage.stockManagementDescriptionTextfield.setValue("very nice cake having choclate cream");
        await AddProductsPage.addProductButton.click();


    })

})