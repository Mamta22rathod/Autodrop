import { test, expect } from '@playwright/test';
const { Workbook } = require('exceljs');


test("Read data from excel sheet", async ({page}) => {
    async function readExacelData() {
        const workbook = new Workbook();
        await workbook.xlsx.readFile('C:/Users/mamta/Downloads/Book1.xlsx');
        const ws = workbook.getWorksheet('worksheet')
        const data = ws.getRow(1).getCell(1).value;
        console.log(data);
    }
    readExacelData();
})