# Test info

- Name: Nav to GoodGuys login
- Location: C:\Users\softw\TypescriptWorkspace\STL-TypeScriptProject-Krishna\tests\BasicsTypeScript\TS18_SkipSpecificTest.spec.ts:9:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.thegoodguys.com.au/", waiting until "load"

    at C:\Users\softw\TypescriptWorkspace\STL-TypeScriptProject-Krishna\tests\BasicsTypeScript\TS18_SkipSpecificTest.spec.ts:11:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | // when run command "npx playwright test", there are several tests inside tests folder only this test case will skip (not run)
   4 | test.skip('Nav to GoodGuys', { tag: ['@smoke', '@positive'] }, async ({ page }) => {
   5 |   await page.goto('https://www.thegoodguys.com.au/');
   6 | });
   7 | //Conditionally skip a test
   8 | //as we are using chromium to run this test, this test will run.
   9 | test('Nav to GoodGuys login', { tag: ['@smoke', '@positive'] }, async ({ page,browserName}) => {
  10 |   test.skip(browserName === 'firefox', 'Still working on it');
> 11 |   await page.goto('https://www.thegoodguys.com.au/');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  12 | });
  13 |
  14 |
  15 |
  16 |
```