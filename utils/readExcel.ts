import * as XLSX from 'xlsx';

export function readLoginDataFromExcel(filePath: string): { username: string; password: string }[] {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(sheet);
  return jsonData as { username: string; password: string }[];
}

//  Annotated Explanation:

// export function readLoginDataFromExcel(filePath: string): { username: string; password: string }[]
// 1.Exported function so it can be reused in other files
// 2.Accepts filePath: string → the path to your .xlsx file (e.g., 'tests/data/test-data.xlsx')
// 3. Returns an array of objects, each having username and password fields


// const workbook = XLSX.readFile(filePath);
//  Reads the Excel file from project
//  XLSX.readFile() is a method from the xlsx library
// It creates a workbook object which represents the entire Excel file (including all sheets)


// const sheet = workbook.Sheets[workbook.SheetNames[0]];
// workbook.SheetNames[0] gets the name of the first sheet in the Excel file
// workbook.Sheets[...] retrieves the actual sheet content by name
// This line extracts the first worksheet (e.g., "Sheet1")


// const jsonData = XLSX.utils.sheet_to_json(sheet);
// Converts the Excel sheet into an array of JSON objects


// Each row becomes an object like { username: "user1", password: "pass1" }
// Uses the header row as keys (e.g., username, password)


// return jsonData as { username: string; password: string }[];
// Returns the parsed JSON data

// Uses TypeScript’s as keyword to explicitly type the return value
// Ensures TypeScript knows this returns an array of objects with username and password strings

// Example Excel Input:
// username	password
// standard_user	secret_sauce
// locked_out_user	secret_sauce

//  Output:

// [
//   { username: 'standard_user', password: 'secret_sauce' },
//   { username: 'locked_out_user', password: 'secret_sauce' }
// ]