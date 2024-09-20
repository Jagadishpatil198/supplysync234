import excel from "exceljs"
class ReadandWriteDatafromExcel{
    async read(filePath,SheetName,rownNum,cellNum){
        let book=new excel.Workbook();
       await book.xlsx.readFile(filePath);
        let sheet=book.getWorksheet(SheetName);
          let  excelData= sheet.getRow(rownNum).getCell(cellNum);
          return excelData;

    }
    async write(filePath,addSheetname,rownNum,cellNum,val){
        let book=new excel.Workbook();
       await book.xlsx.readFile(filePath);
     let  sheet = book.getWorksheet(addSheetname);
         sheet.getRow(rownNum).getCell(cellNum).value=val;
         await book.xlsx.writeFile(filePath);


    }
}
export default new ReadandWriteDatafromExcel();
