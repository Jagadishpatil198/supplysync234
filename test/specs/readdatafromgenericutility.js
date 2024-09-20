import ReadandWriteDatafromExcel from "../genericUtiltiy/excelutility.js"
describe("",()=>{
    // it("gjgj",async()=>{
    //     let retailerName=await ReadandWriteDatafromExcel.read("./test/testData/Book1.xlsx","Sheet1",2,1);
    //    console.log(retailerName+);
       
   
    // })

    it("gjgj",async()=>{

        await ReadandWriteDatafromExcel.write("./test/testData/Book1.xlsx","Sheet1",5,3,"Eggrice");
       
       
   
    })
})