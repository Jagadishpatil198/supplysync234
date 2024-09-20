import ReadandWriteDatafromExcel from "../genericUtiltiy/excelutility.js"
import LoginPage from "../pageobjects/LoginPage.js"

describe("login as retailer",async()=>{ 
 
 it("abcd",async()=>{
   await ReadandWriteDatafromExcel.write("./test/testData/Book1.xlsx","Sheet1",5,4,"jagadish");
   await console.log("hi");
   
 })   



   
})