![Last Commit](https://img.shields.io/github/last-commit/vasu31dev/playwright-ts) ![Pull Requests](https://img.shields.io/github/issues-pr-raw/vasu31dev/playwright-ts)

# Playwright TypeScript Framework: Streamlining Web and API Testing - "Your one-stop solution for efficient and comprehensive testing"

Welcome to the Playwright TypeScript Framework, a unique and comprehensive automation framework designed to simplify and streamline the process of writing and managing automated tests for web applications and APIs.

This framework is ideal for QA professionals, developers, and business analysts looking to improve their testing practices and efficiency. It's equipped with utilities that simplify test creation and maintenance, allowing you to focus on writing your tests out of the box.

## Key Features:

- **Unique Page Object Model Design Pattern**: Our Page Object Model (POM) design is not just another POM. It's a unique approach that significantly reduces complexity and accelerates coding, making it easier and faster to write scripts compared to traditional POMs. This means less time spent on setup and more time spent on creating effective tests. [See how we differ from the traditional Playwright POM](https://playwright.dev/docs/pom).

- **Ease of Use**: Designed to be intuitive and user-friendly, making it an excellent choice for beginners to understand and write scripts. This means less time spent on learning the tool and more time spent on creating effective tests.

- **User-Friendly for All Roles**: This framework is not just for QA professionals. Developers, manual QA, and even Business Analysts can contribute to end-to-end testing, promoting collaboration across different departments and roles.

- **Utility Functions**: Simplifies common actions and assertions, such as clicking buttons, filling forms, and checking elements. It also includes inbuilt methods for conditional statements and maintains a default LoadState across applications.

- **Customizable**: Easily adaptable to meet individual project needs, fitting seamlessly into any project, regardless of its specific requirements or constraints.

- **Inbuilt CI/CD Support with GitHub Actions**: Facilitates continuous integration and continuous delivery with inbuilt support for GitHub actions, automating your testing process from code integration to delivery.

- **Versatile Support**: Supports testing for Web in Desktop and Mobile, Electron Desktop applications, and APIs, allowing comprehensive testing across different platforms and applications.

- **Detailed Reporting**: Provides screenshots, videos, and traces of test failures, making it easier to understand and fix issues.

- **Local Web Server**: Allows you to test UI code changes directly on your local machine or on a VM by easily setting up a local web server, eliminating the need for a separate testing environment.

In essence, the Playwright TypeScript Framework is a powerful, flexible, and user-friendly tool that leverages the power of Playwright and TypeScript. It's an excellent choice for teams looking to improve their testing practices and efficiency.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Update Guide](#project-update-guide)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Writing Tests](#writing-tests)
  - [Page Objects](#page-objects)
- [Utilities](#utilities)
  - [LocatorUtils](#locatorutils)
  - [Frames](#frames)
  - [ActionUtils](#actionutils)
  - [Alerts](#alerts)
  - [ElementUtils](#elementutils)
  - [AssertUtils](#assertutils)
  - [Types](#types)
- [Framework Setup](#framework-setup)
  - [Switching Pages](#pagefactory)
- [Running Tests](#running-tests)
- [Contributing](#contributing)

## Getting Started

### Languages and Frameworks

This project uses the following languages and frameworks:

Typescript as the programming language
Playwright test runner for executing tests
Playwright web first assertions for assertions
Allure Report as the testing report strategy
ESLint
Prettier

### Prerequisites

- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

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

5. Git User setup for the first time. If you are a code/test contributor, set up your user in GIT using the commands:

   ```bash
   git config user.email "<your-email>"
   git config user.name "<your-name>"
   git remote set-url origin https://USERNAME:SECRETTOKEN@github.com/vasu31dev/playwright-ts.git
   ```

   Replace `<USERNAME>` with your GitHub username and `<SECRETTOKEN>` with your GitHub personal access token. If you don't have a personal access token, you can create one in your GitHub account settings.

### Project Update Guide

To pull the latest changes and install the latest packages, follow these steps:

1. Pull the latest changes

```bash
git pull origin <branchName>
```

Replace `<branchName>` with the name of the branch that you want to update.

2. Install the latest packages

```bash
npm install
```

3. If there are dependency errors while installing packages, you can remove the node_modules folder and install the packages again:

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

- `tests`: This directory contains all the end-to-end test files, API tests, and related utilities for testing the application.

- `.eslintrc`: This file contains the configuration for ESLint, a tool for identifying and reporting patterns in JavaScript.

- `.gitignore`: This file specifies intentionally untracked files that Git should ignore.

- `README.md`: This file provides information about the project and instructions on how to use it.

- `package-lock.json` and `package.json`: These files contain the project's npm dependencies.

- `playwright.config.ts`: This file contains the configuration for Playwright, including settings for different browsers and devices, such as viewport sizes, user agent strings, and launch options.

- `tsconfig.json`: This file specifies the root files and the compiler options required to compile the project.

## Framework Setup

1. `GlobalSetup.ts`: This file contains the global setup function that is executed once before all test files. It is typically used for setting up global state such as database connections or configuring the test environment like setting environment variables.

2. `GlobalTeardown.ts`: This file contains the global teardown function that is executed once after all test files. It is typically used for cleaning up the global state such as closing database connections or resetting the test environment.

3. `PageSetup.ts`: This file contains the setup function for the Page object from Playwright. It is used for setting up the page before each test. This is where you can add any common setup code that should run before each test across all spec files.

4. `PageFactory.ts`: This file contains the functions of the PageFactory. These functions are used for managing Page objects, including getting and setting Page objects, switching between pages, and closing a page. This centralizes the management of Page objects, making it easier to control the state of your tests.

5. `Types.ts`: This file contains type definitions that are used across the framework as optional parameters for the utility methods.

### PageFactory

Examples of how to switch between pages and close a page:

```typescript
import { switchPage, switchToDefaultPage, closePage } from '@PageFactory';
await switchPage(2); // switching to second tab/window
switchToDefaultPage(); // switch to the initial page that was launched or the first tab/window
await closePage(); // close the current page and then switch to the default page if it exists
```

## Usage

### Page Objects

Page objects are utilized to encapsulate information about the elements present on each page of your application. They also provide a structured way to write action and assertion functions for various functionalities on each page. This approach promotes code reusability and makes the tests easier to maintain and understand. Page objects can be found in the `pages` directory.

Here's an example of a page object under `pages` package:

```typescript
LoginPage.ts;
//importing utility functions
import {
  getLocatorByTestId,
  getLocatorByLabel,
  getLocatorByText,
} from '@LocatorUtils';
import { gotoURL, click, fill, clickAndNavigate } from '@ActionUtils';
import { expectElementToBeHidden } from '@AssertUtils';
import { isElementVisible } from '@ElementUtils';

const signInLink = () =>
  getLocatorByTestId('sign-in-button').or(getLocatorByTestId('sign-in-link'));
const email = () => getLocatorByTestId('email-input');
const password = `//*[@id="password"]/input`;
const signInButton = () => getLocatorByLabel('sign-in-button');
const successfulMessage = () => getLocatorByText('Login successful');

export async function gotoHomePage() {
  gotoURL('/', { waitUntil: 'domcontentloaded', timeout: 60000 });
}

export async function login(username: string, password: string) {
  await click(signInLink());
  await fill(email(), 'username');
  await fill(password, 'password');
  await clickAndNavigate(signInButton());
}

export async function isLoginSuccessful() {
  await expectElementToBeHidden(signInButton(), 'Login should be successful');
  return isElementVisible(successfulMessage());
}
```

In this example, the `LoginPage` represents a login page in the application. It has methods to navigate to the homepage, perform a login action, and check if the login was successful.

Refer [LocatorUtils](#locatorutils) section for more information on locators.

Refer to the [Running Tests](#running-tests) section below on how to run tests.

### Writing Tests in spec file

Tests are written in the `specs` directory. Each test file should correspond to a specific feature or functionality of the application under test. Tests are constructed using Page objects

Here's an example of a test file under the `specs` directory:

```typescript
login.spec.ts;
//import test from PageSetup.ts which sets up the page before each test
import { test } from '@PageSetup';
//importing page objects to use all functions with in that page to construct the tests
import * as LoginPage from '../pages/LoginPage';

test('successful login', async () => {
  await LoginPage.gotoHomePage();
  await LoginPage.loginSuccessfully();
});
```

In this example, we are setting the page state by importing `test` from `@pageSetup` and writing the spec file

1. Import `test` from @pageSetup instead from `@playwright/test`. This is customised like this for this framework

2. `setPage` function from `Pagesetup` file will set the page state before each test and is imported to our spec files while excuting the tests. If you want to use Playwright page directly to write our tests, we can use `getPage` function from 'PageFactory' file. The page object is managed by the framework, and we can use the `setPage` and `getPage` functions to set and get the page state, ensuring that all of the pages operate on the same page object.

3. We first navigate to the home page, then perform the login action, and finally verify if the login was successful.

## Utilities

The framework provides a set of utility functions that simplify common actions and assertions in Playwright. These functions are located in the `tests/utils` directory and include:

- `LocatorUtils.ts`: This file contains functions for locating web elements in different ways, such as by test ID, label, text, CSS, or XPath.
- `ActionUtils.ts`: This file contains functions for performing actions such as clicking, filling input fields, selecting options from dropdowns, and navigating between pages.
- `ElementUtils.ts`: This file contains functions for handling conditional statements with web elements, such as checking if an element is visible, hidden, or contains certain text or input values.
- `AssertUtils.ts`: This file contains functions for adding both soft and hard assertions in your tests. Soft assertions do not stop the test when they fail, while hard assertions do.
- `Timeouts.ts`: This file contains static timeout values that can be used along with different functions.

These utilities are designed to make your tests more readable and maintainable and to reduce the amount of boilerplate code you need to write.

Here are a few examples of how to use the utility functions:

### LocatorUtils

The `LocatorUtils` module provides a set of utility functions that identify locators in different ways in Playwright.

```typescript
import {
  getLocator,
  getLocatorByTestId,
  getLocatorByText,
  getLocatorByRole,
  getLocatorByLabel,
} from '@LocatorUtils';

const locator = () => getLocator(`button#submit`);
const testIdLocator = () => getLocatorByTestId('submit-button');
const textLocator = () => getLocatorByText('Submit');
const roleLocator = () => getLocatorByRole('button');
const labelLocator = () => getLocatorByLabel('Submit Button');
const locatorWithAnd = () => getLocator(`button#submit`).and.(getLocator(`button#Enabled`));
const locatorWithOr = () => getLocator(`button#gridview`).or.(getLocator(`button#listview`));
const locatorWithFilter = () => getLocatorByRole('button').filter({hasText: 'submit'});
```

In this example, we're using various functions from LocatorUtils:

1. `getLocator(selector: string)`: This function returns a Locator object for the given Xpath or CSS selector. The selector parameter is a string representing the Xpath or CSS selector of the element you want to locate.

2. `getLocatorByTestId(testId: string)`: This function returns a Locator object for the element with the given test ID. The testId parameter is a string representing the test ID of the element you want to locate.

3. `getLocatorByText(text: string)`: This function returns a Locator object for the element with the given text. The text parameter is a string representing the text of the element you want to locate.

4. `getLocatorByRole(role: string)`: This function returns a Locator object for the element with the given ARIA role. The role parameter is a string representing the ARIA role of the element you want to locate.

5. `getLocatorByLabel(label: string)`: This function returns a Locator object for the element with the given label. The label parameter is a string representing the label of the element you want to locate.

6. These locator functions can also be easily used with Locator operators( `and`, `or`) and filters(`filter`). For more information on Locator operators and filter, please refer to [Playwright Locator documentation](https://playwright.dev/docs/locators#filtering-locators)

Here is some more information about `LocatorUtilis` usage as this is a unique POM design pattern

- We use a closure to declare the Locator because the page object is initialized during runtime. If we call the function directly, it may return null due to the page object not being initialized yet. By using a closure, we ensure that we're accessing the page object only after it has been properly initialized.

- For XPath or CSS selectors, we can directly use a string instead of a closure, as these selectors do not involve the page object. This approach allows us to define selectors in a straightforward manner without worrying about the page object's initialization state.

- We are calling the locator function instead of using a constant locator as the page object is initialized during runtime only.

Refer to the [Types](#types) section below for more information on the optional parameters.

#### Frames

The `LocatorUtils` module provides utility functions to handle frames in Playwright.

```typescript
import { getFrameLocator, getLocatorInFrame } from '@LocatorUtils';
await getFrameLocator(frame());
await getLocatorInFrame(frame(), elementInsideFrame());
```

In this example, we're using various functions from LocatorUtils to handle frames:

1. `getFrameLocator(frameInput: string | FrameLocator):`: This function returns a FrameLocator object for the given Xpath or CSS selector. The selector parameter is a string representing the Xpath or CSS selector of the frame you want to locate

2. `getLocatorInFrame(frameInput: string | FrameLocator,input: string | Locator):`: This function returns a Locator object inside the frame. The frameInput parameter is a string or Locator representing the frame that you want to locate the element with in and the input parameter is a string or Locator of the element you want to locate inside the frame.

These Locator functions make it easier to locate elements on the page, and they provide a more readable and maintainable way to define locators in your tests.

### ActionUtils

The `ActionUtils` module provides a set of utility functions that simplify common actions in Playwright.

```typescript
import {
  gotoURL,
  click,
  fill,
  check,
  uploadFiles,
  selectByValue,
} from '@ActionUtils';
import { MAX_TIMEOUT } from '@Timeouts';

await gotoURL('https://www.example.com', { timeout: MAX_TIMEOUT });
await click(`text='Log in'`);
await fill(`input#username`, 'myusername');
await check(`input#agree`);
await uploadFiles(`input#file`, '/path/to/myfile.jpg');
await selectByValue(`#dropdown`, 'selectValue');
```

In this example, we're using various functions from ActionUtils:

1. `gotoURL(path: string, options: GotoOptions)`: This function is used to navigate to a specific URL. The path parameter is the URL you want to navigate to, and the options parameter is an optional parameter that specifies additional navigation options. Here we have overridden the default navigation timeout with MAX_TIMEOUT optional parameter.

2. `click(input: string | Locator, options?: ClickOptions)`: This function is used to click an element on the page. The input parameter is a string or Locator representing the element you want to click, and the options parameter is an optional parameter that specifies additional click options.

3. `fill(input: string | Locator, value: string, options?: FillOptions)`: This function is used to fill a form field with a specific value. The input parameter is a string or Locator representing the form field you want to fill, the value parameter is the value you want to fill the form field with, and the options parameter is an optional parameter that specifies additional fill options.

4. `check(input: string | Locator, options?: CheckOptions)`: This function is used to check a checkbox or radio button. The input parameter is a string or Locator representing the checkbox or radio button you want to check, and the options parameter is an optional parameter that specifies additional check options.

5. `uploadFiles(input: string | Locator, path: UploadValues, options?: UploadOptions)`: This function is used to upload files. The input parameter is a string or Locator representing the file input you want to upload files to, the path parameter is the path of the files you want to upload, and the options parameter is an optional parameter that specifies additional upload options.

6. `selectByValue(input: string | Locator, value: string, options?: SelectOptions)`: This function is used to select a value from a dropdown. The input parameter is a string or Locator representing the select element, the value parameter is the value to select for the dropdown option, and the SelectOptions parameter is an optional parameter that specifies additional select options.

7. Similarly, we have `selectByText()` and `selectByIndex()` functions for selecting options by text or index, and `selectByValues()` for multi-select dropdowns.

Refer to the [Types](#types) section below for more information on the optional parameters.

### Alerts

The `ActionUtils` module provides utility functions to handle alerts in Playwright.

```typescript
import { acceptAlert, dismissAlert, getAlertText } from '@ActionUtils';
await acceptAlert(outOfStockButton()); //click on an element that opens an alert and then accept the alert
await dismissAlert(outOfStockButton()); //click on an element that opens an alert and then dismiss the alert
const text = await getAlertText(outOfStockButton()); //click on an element which opens an alert and then get the text from the alert
```

In this example, we're using various functions from ActionUtils to handle alerts:

1. `acceptAlert(input: string | Locator, promptText?: string)`: This function is used to accept an alert dialog. The input parameter is a string or Locator representing the element that triggers the alert, and the promptText parameter is an optional parameter that specifies the text to enter into a prompt dialog.

2. `dismissAlert(input: string | Locator)`: This function is used to dismiss an alert dialog. The input parameter is a string or Locator representing the element that triggers the alert.

3. `getAlertText(input: string | Locator)`: This function is used to get the text from an alert dialog. The input parameter is a string or Locator representing the element that triggers the alert.

### ElementUtils

The `ElementUtils` module provides utility functions for extracting values from web elements and performing condition checks. These functions are designed to handle common tasks related to web elements, such as retrieving text or attribute values, checking visibility, and more.

```typescript
import {
  getText,
  getAllTexts,
  getInputValue,
  getAttribute,
  attribute,
} from '@ElementUtils';
const text = await getText(textLocator());
const allTexts = await getAllTexts(textLocator());
const inputValue = await getInputValue(userName());
const attribute = await getAttribute(labelLocator(), 'class');
if (isElementVisible(logoutButton())) {
  console.log('Login is successful');
} else {
  console.log('Login is not successful');
}
```

In this example, we're using various functions from ElementUtils:

1. `getText(input: string | Locator, options?: TimeoutOption)`: This function gets the inner text of an element. The input parameter is a string or Locator representing the element from which to get the text. TimeoutOption is an optional parameter for timeout.

2. `getAllTexts(input: string | Locator)`: This function gets all inner texts from the given locator. TimeoutOption is an optional parameter for timeout.

3. `getInputValue(input: string | Locator, options?: TimeoutOption)`: This function gets the input value from text or form fields. The input parameter is a string or Locator representing the element from which to get the text. TimeoutOption is an optional parameter for timeout.

4. `getAttribute(input: string | Locator,attributeName: string, options?: TimeoutOption)`: This function gets the attribute value from the given attributeName parameter of the Locator. TimeoutOption is an optional parameter for timeout.

5. `isElementVisible(input: string | Locator, options?: TimeoutOption)`: This function checks whether the given input parameter is visible and returns a boolean value. TimeoutOption is an optional parameter for timeout.

### AssertUtils

The `AssertUtils` module provides a set of utility functions that simplify common assertions in Playwright. These functions are designed to make your tests more readable and maintainable.

```typescript
import {
  expectElementToBeVisible,
  expectElementToBeHidden,
  expectElementToHaveText,
  expectElementNotToBeChecked,
  expectElementNotToContainText,
} from '@AssertUtils';
import { INSTANT_TIMEOUT, STANDARD_TIMEOUT } from '@Timeouts';
await expectElementToBeVisible(logoutButton(), 'Login should be successful', {
  timeout: STANDARD_TIMEOUT,
});
await expectElementToBeHidden(
  signInButton(),
  'signInButton should not be displayed',
);
await expectElementToHaveText(successfulMessage(), 'Login is successful', {
  ignoreCase: false,
});
await expectElementNotToBeChecked(agreeCheckbox(), {
  timeout: INSTANT_TIMEOUT,
});
//with 'soft' optional parameter 'true' we are making this assertion as soft assertion
await expectElementNotToContainText(successfulMessage(), '404 error', {
  soft: true,
});
assertAllSoftAssertions(test.info()); // use this in the spec file to stop the test if there are failures for any soft assertions
```

In this example, we're using various functions from AssertUtils:

1. `expectElementToBeVisible(input: string | Locator, options?: ExpectOptions)`: This function checks if a specific element is visible on the page. The input parameter is a string or Locator representing the element you want to check. The options parameter is an optional parameter that specifies additional options like timeout and a custom message to display in the report if the assertion fails.

2. `expectElementToBeHidden(element: Locator, message?: string, options?: ExpectOptions)`: This function checks if a specific element is hidden on the page. The parameters are the same as expectElementToBeVisible.

3. `expectElementToHaveText(input: string | Locator,text: string | RegExp | Array<string | RegExp>,options?: ExpectOptions & ExpectTextOption)`: This function asserts that the text of a specific element matches the expected text. The input parameter is a string or Locator representing the element from where we assert text, the text parameter is the value you want to assert with, and the ExpectOptions and ExpectTextOption parameters are optional parameters that specify additional assert options like soft assertion, ignore case, etc.

4. `expectElementNotToContainText(element: Locator, unexpectedText: string, options?: ExpectOptions)`: This function checks if a specific element does not contain a certain text. The unexpectedText parameter is the text you expect the element not to contain. Soft assertion is a Expectoptions parameter.

5. `assertAllSoftAssertions(testInfo: TestInfo)`: This function checks if there were any failures in the soft assertions and stops the test if there were. The testInfo parameter is the test information object from Playwright.

These functions make it easier to write assertions in your tests, and they provide better error messages when the assertions fail. They also support both hard and soft assertions, allowing you to choose the appropriate level of strictness for your tests.

Refer to the [Types](#types) section below for more information on the optional parameters.

### Types

The `Types` module provides a set of options for utility modules

```typescript
import { getLocator } from '@LocatorUtils';
import { clickAndNavigate, type } from '@ActionUtilis';
import { expectElementToHaveText } from '@AssertUtils';
import { INSTANT_TIMEOUT, STANDARD_TIMEOUT } from '@Timeouts';

const loginpage = () => getLocator(`#loginpage`, { hasText: 'login' });
await clickAndNavigate(
  loginpage,
  { button: 'right' },
  { force: true },
  { clickCount: 1 },
);
await type(`#username`, 'testuser', { delay: 2 }, { noWaitAfter: false });
await expectElementToHaveText(
  successfulMessage(),
  { useInnerText: true },
  {
    ignoreCase: false,
  },
  { timeout: STANDARD_TIMEOUT },
);
```

In this example, we're using some Types optional parameters with some utility functions:

1. `Locator options`: `hasText` is used as a optional parameter to locate the element that has given text

2. `Action Options(ClickOptions)`: `button` is used for right click, `force` is used to bypass the actionability checks and force the click and `clickCount` is used to click the element for the given number of times

3. `Action Options(TypeOptions)`: `delay` is used to simulate the delay between the key presses with the given time, `noWaitAfter` is used to specify not to wait after the action `type`

4. `ExpectOptions(ExpectTextOptions)`: `useInnerText` is used to assert the inner text, `ignoreCase` is used to ignore case while asserting and `timeout` is used to wait until the specified time before failing the test

## Running Tests

### Run tests using Playwright plugin

To run the tests, using Playwrgit plugin, please follow the below instructions:

Playwright plugin installation:

1. Click on `Extensions` icon in VSCode and search for `Playwright`

2. Select and install `Playwright Test for VSCode` plugin

3. SCREENSHOT

Running tests with plugin:

1. Once the plugin is installed, we can see small green `Play` button on every test under the `specs` file

2. Clicking on the `Play` button will execute the test. We can either execute individual tests or all tests together within the spec file

3. SCREENSHOT

### Parallel execution

1. In order to execute the tests in parallel in multiple workers, please add the below command in the spec file above the `test` block

`test.describe.configure({ mode: 'parallel' });`

2. `workers` can be configured either from `playwright.config` file or from commnad-line interface

### Run tests using Command-line interface

To run the tests, using the commnad-line interface, please follow the below commands:

#### npm run commands

- To run a single test with grep command in headed mode:

```bash
npm run test -- -g 'login test'
```

- To run all the tests in a spec file:

```bash
npm run test -- nucleus.spec.ts
```

- To run all the tests in a spec file with 3 threads, and 2 retries in headless mode:

```bash
npm run reg -- nucleus.spec.ts -j 3 --retries 2
```

- To run in debug mode:

```bash
npm run test -- nucleus.spec.ts --debug
```

- To run all the smoke tests using the tag:

```bash
npm run test -- -g '@smoke'
```

#### npx playwright test commands

```bash
npx playwright test -c playwright.config.ts -g "logo is present @reg" --headed -j 1 --retries 0
```

- `-c` -> pointing to the playwright.config file
- `-g` -> grep the tests you want to run instead of all the tests
- `-j` -> number of workers
- `--retries` -> retry count for failed tests
- `--headed` -> run in headed mode (default is headless)
- `--project=chromium`
- `--repeat-each 3` -> repeat each test 3 times
- `--grep-invert` -> opposite of `-g` or grep
- `--max-failures 4` -> Stop after the first 4 test failures. This includes a count of failures in the retry test as well
- `--list` -> List all the tests, but do not run them.

For more information, please refer to the [Playwright CLI documentation](https://playwright.dev/docs/test-cli).

## Contributing

Contributions are welcome! Please read the contributing guidelines first.
