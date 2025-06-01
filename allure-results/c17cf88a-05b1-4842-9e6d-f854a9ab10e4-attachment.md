# Test info

- Name: Valid login should succeed
- Location: C:\Users\softw\TypescriptWorkspace\STL-TypeScriptProject-Krishna\tests\BasicsTypeScript\TS19_ReadEnvFile.spec.ts:4:7

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.saucedemo.com/
Call log:
  - navigating to "https://qa.saucedemo.com/", waiting until "load"

    at C:\Users\softw\TypescriptWorkspace\STL-TypeScriptProject-Krishna\tests\BasicsTypeScript\TS19_ReadEnvFile.spec.ts:5:16
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph: Check if there is a typo in qa.saucedemo.com.
- paragraph
- list:
  - listitem:
    - text: If spelling is correct,
    - link "try running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
    - text: .
- text: DNS_PROBE_FINISHED_NXDOMAIN
- button "Reload"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 |
   4 |   test('Valid login should succeed',async ({ page }) => {
>  5 |     await page.goto(process.env.BASE_URL); // 
     |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.saucedemo.com/
   6 |     await page.fill('#user-name', process.env.USERNAME1);
   7 |     await page.fill('#password', process.env.PASSWORD);
   8 |     await page.click('#login-button');
   9 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  10 |   });
  11 |
```