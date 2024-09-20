import excel from "exceljs"
import ReadandWriteDatafromExcel from "../genericUtiltiy/excelutility.js"
describe("ooo",()=>{
    it("ghgh",async()=>{
     
        await ReadandWriteDatafromExcel.write("./test/testData/Book2.xlsx","Sheet1",2,4,"jagadish")

    // Create a new workbook instance
    let book = new excel.Workbook();

    // Read the Excel file
    await book.xlsx.readFile("./test/testData/Book1.xlsx");

    // Get the worksheet by name
    let sheet = book.getWorksheet("Sheet1");

    // Access the first row and cell
    let row = sheet.getRow(2);
    let data = row.getCell(2).toString();

    // Output the data
    console.log(data + "---------------------------");



    })
})