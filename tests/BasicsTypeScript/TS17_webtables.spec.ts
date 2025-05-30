import { test } from '@playwright/test';

test('Get row and column count from web table', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  // Get all column headers
  const headerCells = page.locator('.rt-thead.-header .rt-th');
  const columnCount = await headerCells.count();
  console.log(`Column Count: ${columnCount}`);

  // Get all row count exculuding header
    const rows = page.locator('.rt-tbody .rt-tr');
    const rowCount = await rows.count();
    console.log(`Row Count: ${rowCount}`);

//   // get colum names
// //   const columnNames: string[] = [];   
//     for (let i = 0; i < columnCount; i++) {
//         //get text of header cell
//         const headerText = await headerCells.nth(i).textContent();
//       //  console.log(`headerText: ${headerText}`);
//         //names of headers
//         if (headerText !== null) {
//             console.log(`Column ${i + 1} Name: ${headerText.trim()}`);
//         } else {
//             console.log(`Column ${i + 1} Name: (null)`);
//         }

//     }
    //get each cell data and if null then print null

    for (let i = 0; i < rowCount; i++) {
        const rowCells = rows.nth(i).locator('.rt-td');

        for (let j = 0; j < columnCount; j++) {
            // Use innerText to ensure empty cells are handled, and trim whitespace
            const cell = rowCells.nth(j);
            const cellText = await cell.textContent();
          //  cellText === null

        //cellText === null-->Checks if cellText is null (which can happen if the cell doesn't exist or has no text content).
       //cellText.trim() === ''-->If cellText is not null, this checks whether the string is empty or only spaces, tabs, or newlines. trim() removes all leading and trailing whitespace.

            if (cellText === null || cellText.trim() === '') {
                console.log(`Row ${i + 1} Column ${j + 1} Data: null`);
            } else {
                console.log(`Row ${i + 1} Column ${j + 1} Data: ${cellText.trim()}`);
            }
        }
    }

});
