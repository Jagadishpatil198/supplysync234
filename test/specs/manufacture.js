
import {expect} from "chai";
import LoginPage from "../pageobjects/LoginPage";
import fs from "fs"
    let  data= fs.readFileSync("./test/testData/manufacturecredentials.json")
     let   manufactureCred=JSON.parse(data);

describe("login as manufacture",()=>{
    let url=manufactureCred.url
    let manufactureName=manufactureCred.manufactureName
    let manufacturePassword=manufactureCred.manufacturePassword
    let manufactureVisibleText=manufactureCred.manufactureVisibleText

    it("login as manufacture",async()=>{
        await browser.maximizeWindow();
        await browser.url("http://106.51.90.215/Build/Supply_Management_System/");
       let currenturl= await browser.getUrl();
       expect(currenturl).to.equal(url);
       await LoginPage.Login(manufactureName,manufacturePassword,manufactureVisibleText);
        await browser.pause(3000);
        
    })
})