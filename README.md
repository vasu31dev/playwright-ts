![Last Commit](https://img.shields.io/github/last-commit/vasu31dev/playwright-ts)  ![Pull Requests](https://img.shields.io/github/issues-pr-raw/vasu31dev/playwright-ts)

# Playwright TypeScript Framework

Welcome to the Playwright TypeScript Framework, a comprehensive automation framework designed for web applications. This framework leverages the power of Playwright and TypeScript to provide a robust and flexible structure for writing and managing automated tests. It's equipped with utilities that simplify test creation and maintenance, allowing you to focus on writing your tests.

## Features

- **Page Object Model Design Pattern**: Enhances test maintenance and reduces code duplication.
- **Utility Functions**: Simplifies common actions and assertions.
- **TypeScript**: Offers static typing, autocompletion, and other benefits.
- **Configurable Options**: Allows different settings for environments and test behaviors.
- **Detailed Reporting**: Provides screenshots, videos, and traces of test failures.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Updates](#updates)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Writing Tests](#writing-tests)
  - [Page Objects](#page-objects)
  - [Running Tests](#running-tests)
- [Utilities](#utilities)
  - [ActionUtils](#actionutils)
  - [Alerts](#alerts)
  - [LocatorUtils](#locatorutils)
  - [AssertUtils](#assertutils)
  - [ElementUtils](#elementutils)
- [Framework Setup](#framework-setup)
  - [Switching Pages from PageFactory](#pagefactory)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vasu31dev/playwright-ts.git
```

2. Navigate to the project directory:

```bash
cd playwright-ts
```

3. Install the dependencies:

```bash
npm install
```

4. Install the Playwright browsers

```bash
npx playwright install
```

5. Git User setup for first time
If you are a code/test contributor, set up your user in GIT using the commands:
git config user.email "<your-email>"
git config user.name "<your-name>"
git remote set-url origin https://USERNAME:SECRETTOKEN@github.com/vasu31dev/playwright-ts.git


### Updates
To pull the latest changes and install the latest packages, follow these steps:

1. Pull latest changes

```bash
git pull origin <branchName>
```

2. Install latest packages

```bash
npm install
```

3. If there are dependency errors while installing packages, remove the `node_modules` folder and install the packages again:

```bash
rm -rf node_modules
npm install
```

4. Update Playwright browsers as needed

```bash
npx playwright install
```

## Project Structure
The project is structured into several packages and files, each serving a specific purpose:

- `tests`: This directory contains all the test files and related utilities.
- `.eslintrc`: This file contains the configuration for ESLint, a tool for identifying and reporting on patterns in JavaScript.
- `.gitignore`: This file specifies intentionally untracked files that Git should ignore.
- `README.md`: This file provides information about the project and instructions on how to use it.
- `package-lock.json` and `package.json`: These files contain the project's npm dependencies.
- `playwright.config.ts`: This file contains the configuration for Playwright, including settings for different browsers and devices.
- `tsconfig.json`: This file specifies the root files and the compiler options required to compile the project.

## Usage

### Writing Tests

Tests are written in the tests directory. Each test file should correspond to a specific feature or functionality.

Here's an example of a test file under specs package:

```typescript
import { test } from "@PageSetup";
import * as LoginPage from "../pages/loginPage";

test("successful login", async () => {
    await LoginPage.gotoHomePage();
    await LoginPage.loginSuccessfully();
});
```

In this example, we're testing a login functionality. We first navigate to the login page, perform the login action, and then verify if the login was successful.

### Page Objects

Page objects are used to encapsulate the information about the elements on your application's page and the methods to interact with them. Page objects can be found in the `pages` directory.

Here's an example of a page object under `pages` package:

```typescript
import { getLocatorByTestId, getLocatorByLabel, getLocatorByText } from "@LocatorUtils";
import { gotoURL, click, fill, clickAndNavigate } from "@ActionUtils";
import { expectElementToBeHidden } from "@AssertUtils";
import { isElementVisible } from "@ElementUtils";

  const signInLink = () => getLocatorByTestId("sign-in-button").or(getLocatorByTestId("sign-in-link"));
  const email = () => getLocatorByTestId("email-input");
  const password = `//*[@id="password"]/input`;
  const signInButton = () => getLocatorByLabel('sign-in-button');
  const successfulMessage = () => getLocatorByText('Login successful');

  export async function gotoHomePage() {
    gotoURL("/", { waitUntil: "domcontentloaded", timeout: 60000 });
  }

  export async function login(username: string, password: string) {
    await click(signInLink());
    await fill(email(), "username");
    await fill(password, "password");
    await clickAndNavigate(signInButton());
  }

  export async function isLoginSuccessful() {
    await expectElementToBeHidden(signInButton(), "Login should be successful");
    return isElementVisible(successfulMessage());
  }
```

In this example, the `LoginPage` represents a login page in the application. It has methods to navigate to the page, perform a login action, and check if the login was successful.

### Running Tests
To run the tests, use the following commands:

#### npm run commands
- To run a single test with grep command in headed mode:

```bash
npm run test -- -g 'login test'
```

- To run all the tests in a spec file:

```bash
npm run test -- nucleus.spec.ts
```

- To run all the tests in a spec file with 3 threads, 2 retries in headless:

```bash
npm run reg -- nucleus.spec.ts -j 3 --retries 2
```

- To run in debug mode:

```bash
npm run test -- nucleus.spec.ts --debug
```

- To all the smoke tests using tag:

```bash
npm run test -- -g '@smoke'
```

#### npx playwright test commands

```bash
npx playwright test -c playwright.config.ts -g "logo is present @reg" --headed -j 1 --retries 0
```
- -c -> pointing to the playwright.config file
- -g -> grep the tests you want to run instead of all the tests
- -j -> number of workers
- --retries -> retry count for failed tests
- --headed -> run in headed mode (default is headless)
- --project=chromium 
-  --repeat-each 3 -> repeach each test 3 times
- --grep-invert -> opposite of -g or grep
- --max-failures 4 -> Stop after the first 4 test failures. This includes count of failures in retry test as well
- --list -> list all the tests, but do not run them.

For more information, please refer to the [Playwright CLI documentation](https://playwright.dev/docs/test-cli).

## Utilities

The framework provides a set of utility functions that simplify common actions and checks in Playwright. These functions are located in the `tests/utils` directory and include:

-	`ActionUtils.ts`: Contains functions for performing actions such as clicking, filling input fields, selecting options, and navigating pages.
-	`LocatorUtils.ts`: Contains functions for locating web elements in different ways.
-	`AssertUtils.ts`: Contains functions for adding soft and hard assertions in your tests.
-	`ElementUtils.ts`: Contains functions for conditional statements with web elements, text/s, imputvalue/s.


Here are few examples of how to use utility function:

### ActionUtils
```typescript
import { gotoURL, click, fill, check, uploadFiles } from "@ActionUtils";

await gotoURL('https://www.example.com');
await click('text="Log in"');
await fill('input#username', 'myusername');
await check('input#agree');
await uploadFiles('input#file', '/path/to/myfile.jpg');
```

In this example, we're using the `click` function from `ActionUtils` to click a button with the text "Log in". 
1. `click(input: string | Locator, options?: ClickOptions)`: This function is used to click an element on the page. The input parameter is a string or Locator representing the element you want to click, and the options parameter is an optional parameter that specifies additional click options.
2. `gotoURL(path: string, options: GotoOptions)`: This function is used to navigate to a specific URL. The path parameter is the URL you want to navigate to, and the options parameter is an optional parameter that specifies additional navigation options.
3. `fill(input: string | Locator, value: string, options?: FillOptions)`: This function is used to fill a form field with a specific value. The input parameter is a string or Locator representing the form field you want to fill, the value parameter is the value you want to fill the form field with, and the options parameter is an optional parameter that specifies additional fill options.`
4. `check(input: string | Locator, options?: CheckOptions)`: This function is used to check a checkbox or radio button. The input parameter is a string or Locator representing the checkbox or radio button you want to check, and the options parameter is an optional parameter that specifies additional check options.
5. `uploadFiles(input: string | Locator, path: UploadValues, options?: UploadOptions)`: This function is used to upload files. The input parameter is a string or Locator representing the file input you want to upload files to, the path parameter is the path of the files you want to upload, and the options parameter is an optional parameter that specifies additional upload options.

### Alerts 

```typescript
import { acceptAlert, dismissAlert, getAlertText } from "@ActionUtils";
    await acceptAlert(outOfStockButton()); //click on an element which opens an alert and then accept the alert
    await dismissAlert(outOfStockButton()); //click on an element which opens an alert and then dismiss the alert
    const text = await getAlertText(outOfStockButton()); //click on an element which opens an alert and then get the text from the alert
```

### LocatorUtils
```typescript
import { getLocator, getLocatorByTestId, getLocatorByText, getLocatorByRole, getLocatorByLabel } from "@LocatorUtils";

const locator =  () => getLocator('button#submit');
const testIdLocator =  () => getLocatorByTestId('submit-button');
const textLocator =  () => getLocatorByText('Submit');
const roleLocator =  () => getLocatorByRole('button');
const labelLocator =  () => getLocatorByLabel('Submit Button');
```

### AssertUtils
```typescript
import { expectElementToBeVisible, expectElementToBeHidden, expectElementToHaveText,
 expectElementNotToBeChecked, expectElementNotToContainText } from "@uAssertUtils";
import { INSTANT_TIMEOUT } from "@Timeouts";
await expectElementToBeVisible(logoutButton(), "Login should be successful");
await expectElementToBeHidden(signInButton(), "signInButton should not be displayed");
await expectElementToHaveText(successfulMessage(), "Login is successful");
await expectElementNotToBeChecked(agreeCheckbox(), {timeout: INSTANT_TIMEOUT});
await expectElementNotToContainText(successfulMessage(), "404 error", {soft: true});
assertAllSoftAssertions(test.info()); // use this in the spec file to stop the test if there are failures for any soft assertions
```

### ElementUtils
```typescript
import { getText, getAllTexts, getInputValue, getAttribute, attribute } from "@ElementUtils";
const text = await getText(textLocator());
const allTexts = await getAllTexts(textLocator());
const inputValue = await getInputValue(userName());
const attribute = await getAttribute(labelLocator(), 'class');
if(isElementVisible(logoutButton())){
   console.log(''Login is successful)
} else{
    console.log(''Login is not successful)
}

```

## Framework Setup

1. `GlobalSetup.ts`: This file contains the global setup function that is executed once before all test files. It is typically used for setting up global state or configuring the test environment.

2. `GlobalTeardown.ts`: This file contains the global teardown function that is executed once after all test files. It is typically used for cleaning up the global state or the test environment.

3. `PageSetup.ts`: This file contains the setup function for the Page object from Playwright. It is used for setting up the page before each test.

4. `PageFactory.ts`: This file contains the PageFactory class that is used for creating and managing Page objects.

5. `Types.ts`: This file contains type definitions that are used across the framework as optional parameters for the utility methods.

### PageFactory

 Examples on how to Switch between Pages and closing a page

```typescript
    import { switchPage, switchToDefaultPage, closePage } from "@PageFactory";
    await switchPage(2); // switching to second tab/window
    switchToDefaultPage(); // switch to the intial page that was launched or first tab/window
    await closePage(); // close the current page and then switch to default page if it exists
```


## Contributing

Contributions are welcome! Please read the contributing guidelines first.
