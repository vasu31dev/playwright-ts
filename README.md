![Last Commit](https://img.shields.io/github/last-commit/vasu31dev/playwright-ts) ![Pull Requests](https://img.shields.io/github/issues-pr-raw/vasu31dev/playwright-ts)

---

<div align="center">

# 🚀 Elevate Your Automation: Redefining the Future of Testing, Where Precision Meets Efficiency.

## Playwright TypeScript Framework: "Your One-Stop Solution for Web (Desktop & Mobile), API, and Electron Testing"

</div>

---

Welcome to the Playwright TypeScript Framework. This unique and comprehensive automation framework is designed to simplify and streamline the process of writing and managing automated tests for Web (Desktop & Mobile), APIs, and Electron Desktop applications. It's built on [Playwright](https://playwright.dev/), a powerful browser automation library, and [TypeScript](https://www.typescriptlang.org/), a statically typed superset of JavaScript, offering a robust and efficient environment for end-to-end testing.

This framework is ideal for QA professionals, developers, and business analysts looking to improve their testing practices and efficiency. It's equipped with utilities that simplify test creation and maintenance, allowing you to focus on writing your tests out of the box.

## Key Features:

- **Unique Page Object Model Design Pattern**: Our Page Object Model (POM) design stands apart from traditional POMs. It's a unique approach that significantly reduces complexity and accelerates coding, making it easier and faster to write scripts compared to traditional POMs. This means less time spent on setup and more time spent on creating effective tests. [Discover how our approach differs with the traditional POM](docs/POMComparision.md).

- **Ease of Use**: Designed to be intuitive and user-friendly, making it an excellent choice for beginners to understand and write scripts. This means less time spent on learning the tool and more time spent on creating effective tests.

- **User-Friendly for All Roles**: This framework is not just for QA Automation professionals. Developers, Manual QA, and Business Analysts can also contribute to end-to-end testing, promoting collaboration across different departments and roles.

- **Utility Functions**: Simplifies common actions and assertions, such as clicking buttons, filling forms, and checking elements. It also includes inbuilt methods for conditional statements and maintains a default LoadState across applications.

- **Customizable**: Easily adaptable to meet individual project needs, fitting seamlessly into any project, regardless of its specific requirements or constraints.

- **Inbuilt CI/CD Support with GitHub Actions**: Facilitates continuous integration and continuous delivery with inbuilt support for GitHub actions, automating your testing process from code integration to delivery.

- **Versatile Support**: It facilitates testing across Web (Desktop & Mobile),APIs and, Electron Desktop apps, allowing comprehensive testing across different platforms and applications.

- **Detailed Reporting**: Provides screenshots, videos, and traces of test failures, making it easier to understand and fix issues.

- **Local Web Server**: Allows you to test UI code changes directly on your local machine or on a VM by effortlessly initializing a local web server, eliminating the need for a separate testing environment.

In summary, the Playwright TypeScript Framework is a powerful, flexible, and user-friendly tool that leverages the power of Playwright and TypeScript. It's an excellent choice for teams looking to improve their testing practices and efficiency.

## Table of Contents

- [**Getting Started**](#getting-started)
  - [Tools & Frameworks](#tools--frameworks)
  - [Prerequisites](docs/Installation.md)
  - [Installation](docs/Installation.md#installation)
  - [Project Update Guide](docs/Installation.md#project-update-guide)
- [**Project Structure**](docs/ProjectStructure.md)
- [**Framework Setup**](docs/FrameworkSetup.md)
  - [Page set up](docs/FrameworkSetup.md#page-set-up)
- [**Usage**](#usage)
  - [Working with Page Objects](#page-objects)
  - [Creating a Spec File](#writing-tests-in-a-spec-file)
- [**Utilities**](docs/Utilities.md)
  - [Page Utilities](docs/Utilities.md#page-utilities)
  - [Locator Utilities](docs/Utilities.md#locator-utilities)
  - [Handling Frames](docs/Utilities.md#handling-frames)
  - [Action Utilities](docs/Utilities.md#action-utilities)
  - [Managing Alerts](docs/Utilities.md#managing-alerts)
  - [Element Utilities](docs/Utilities.md#element-utilities)
  - [Assertion Utilities](docs/Utilities.md#assert-utilities)
  - [Optional Parameter Type Objects](docs/Utilities.md#optional-parameter-type-objects)
  - [Test annotations](docs/Utilities.md#test-annotations)
- [**Executing Tests**](#executing-tests)
  - [Using the Playwright Plugin](docs/ExecutingTests.md#run-tests-using-the-playwright-plugin)
  - [Command-Line Execution](#running-tests-via-the-command-line-interface)
  - [Report Generation and Viewing](#report-generation-and-viewing)
- [**Additional Playwright Features**](#additional-playwright-features)
- [**Best Practices**](#best-practices)
- [**Contribution guide**](#contribution-guide)

## Getting Started

### Tools & Frameworks

- **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript programming language, enhancing code quality and understandability.
- **[Playwright Test](https://playwright.dev/docs/test-configuration)**: A modern end-to-end testing framework, facilitating [test creation](https://playwright.dev/docs/api/class-test), [execution](https://playwright.dev/docs/running-tests), [fixture management](https://playwright.dev/docs/test-fixtures), and [report generation](https://playwright.dev/docs/test-reporters).
- **[Playwright Assertions](https://playwright.dev/docs/assertions)**: Provides robust assertion capabilities for validating test outcomes.
- **[Allure Report](https://docs.qameta.io/allure/)**: A flexible and visually appealing reporting tool, offering clarity on test results.
- **[ESLint](https://eslint.org/)**: A pluggable linting utility for JavaScript and TypeScript, ensuring code consistency and detecting potential errors.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter, ensuring consistent code style across the project.
- **[Logger (Winston)](https://www.npmjs.com/package/winston)**: A versatile logging library, producing both file-based logs and color-coded console outputs.
- **[Husky](https://www.npmjs.com/package/husky)**: Manages Git hooks to enforce quality checks, such as linting, before commits.
- **[Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)**: A CI/CD platform integrated with GitHub, automating workflows like test execution on pull requests. Enhanced with [Playwright's CI guide](https://playwright.dev/docs/ci-intro).

### Prerequisites

Before you begin, there are some essential requirements you must meet. Please refer to the [Prerequisites section](docs/Installation.md) for detailed information on the necessary software and tools needed to run this project.

### Installation

Get started with the project by following the step-by-step installation guide. Please refer to the [Installation section](docs/Installation.md#installation) for complete instructions on setting up the project on your local machine.

### Project Update Guide

Keeping your project up to date is crucial. Please refer to the [Project Update Guide section](docs/Installation.md#project-update-guide) for guidelines on how to update your project to the latest version.

## Project Structure

Understanding the project's architecture is key to working with the code. Please refer to the [Project Structure section](docs/ProjectStructure.md) for an overview of the directory layout and file organization.

## Framework Setup

Learn how to configure and customize the framework to suit your needs. Please refer to the [Framework Setup section](docs/FrameworkSetup.md) for detailed instructions.

### Page set up and Switching Pages

Managing page navigation is a common task in web testing. Please refer to the [Pages section](docs/FrameworkSetup.md#switching-pages) for techniques and examples on how to set up a page and switch between different pages within your tests.

## Usage

### Page Objects

Page objects are utilized to encapsulate information about the elements present on each page of your application. They also provide a structured way to write action and assertion functions for various functionalities on each page. This approach promotes code reusability and makes the tests easier to maintain and understand. Page objects can be found in the `pages` directory.

Here's an example of a page object under the `pages` package:

**sauce-demo-login-page.ts**

```typescript
//importing utility functions
import { click, clickAndNavigate, fill, gotoURL } from '@ActionUtils';
import { failureLoginCredentials, successLoginCredentials } from '../../testdata/sauce-demo-test-data';
import { expectElementToBeVisible } from '@AssertUtils';
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from '@LocatorUtils';

const userName = `#user-name`;
const password = () => getLocator(`#password`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;

export async function navigateToSauceDemoLoginPage() {
  await gotoURL('https://www.saucedemo.com/');
}

export async function logInSuccessfully() {
  await fill(userName, successLoginCredentials.username);
  await fill(password(), successLoginCredentials.password);
  await clickAndNavigate(login());
}

export async function failureLogin() {
  await fill(userName, failureLoginCredentials.username);
  await fill(password(), failureLoginCredentials.password);
  await click(login());
}

export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage);
}

export async function verifyLoginPageisDisplayed() {
  await expectElementToBeVisible(userName);
}
```

In this example, the `sauce-demo-login-page` represents the login page within the application. It includes methods to navigate to the Saucedemo homepage, execute both successful and unsuccessful login actions, verify the success of the login in the successful login scenario, and confirm the display of an error message in the case of a failed login.

Refer to the [Utilities](docs/Utilities.md) section on how to use the reusable methods.

Refer to the [Running Tests](#executing-tests) section below on how to run tests.

### Writing Tests in a spec file

Tests are written in the `specs` directory. Each test file should correspond to a specific feature or functionality of the application under test. Tests are constructed using Page objects.

Here's an example of a test file under the `specs` directory:

**sauce-demo-preferred-pom.spec.ts**

```typescript
//import test from PageSetup.ts which sets up the page before each test
import { test } from '@PageSetup';

//importing page objects to use all functions within that page to construct the tests
import * as LoginPage from 'tests/pages/preferredPOM/sauce-demo-login-page';
import * as MiniCart from 'tests/pages/preferredPOM/sauce-demo-mini-cart';
import * as ProductsPage from 'tests/pages/preferredPOM/sauce-demo-products-page';

<<<<<<< HEAD
test.describe('Saucedemo tests for successful login and add product to cart', () => {
=======
test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
>>>>>>> 2337574b368863f90b3c329fa56455c91ba36507
  test('Saucedemo tests - Successful login will display Products Page', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed on successful login
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo test - Add product to cart', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    //verifying mini cart count is updated to 1
    await MiniCart.verifyMiniCartCount('1');
  });

  test('Saucedemo test - When login is unsuccessful will not display Products Page', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    //verifying Login is still displayed
    await LoginPage.verifyLoginPageisDisplayed();
    //verifying Products Page is not displayed
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
```

In this example, we are setting the page state by importing `test` from `@PageSetup` and writing the spec file. Here are some important points to note:

1. Import `test` from `@PageSetup` instead from `@playwright/test`. `page-setup` is customized for this framework to set the page state. This ensures that the page is set up correctly before each test.

2. `setPage` function from `page-setup` file will set the page state before each test and is imported to our spec files while executing the tests. If you want to use the Playwright page directly to write our tests, we can use `getPage` function from `page-utils` file. The page object is managed by the framework, and we can use the `setPage` and `getPage` functions to set and get the page state, ensuring that all of the pages operate on the same page object.

3. We first navigate to the home page, then perform the login action, and finally verify if the login was successful.

In this example, the `LoginPage` represents a login page within the application. It includes methods to navigate to the homepage, perform a login action, and check if the login was successful. Similarly, `ProductsPage` and `MiniCart` are also page objects that have functions for their respective pages.

## Utilities

Explore various utility functions and helpers that can make your testing more efficient. The Utilities section in this project encompasses a variety of functions designed to enhance the efficiency of your testing process. These utilities include:

1. [Page Utilities](docs/Utilities.md#page-utilities): Functions that assist in setting and getting the page object.
2. [Locator Utilities](docs/Utilities.md#locator-utilities): Functions that assist in locating elements on the page, making it easier to interact with them.
3. [Action Utilities](docs/Utilities.md#action-utilities): Functions that encapsulate common actions like clicking, typing, or dragging, providing a more concise way to express these operations in your tests.
4. [Element Utilities](docs/Utilities.md#element-utilities): Functions for handling conditional statements with web elements, such as checking if an element is visible, hidden, or contains certain text or input values.
5. [Assertion Utilities](docs/Utilities.md#assert-utilities): Helpers that simplify the process of making assertions about the state of the application, enhancing the readability and maintainability of your tests.
6. [Optional Parameter Type Objects](docs/Utilities.md#optional-parameter-type-objects): Provides a set of options for utility modules.

Please refer to the [Utilities section](docs/Utilities.md) for a comprehensive guide to the available utilities in this project, including detailed descriptions and examples of how to use them.

## Executing Tests

We have the flexibility to execute a single test, a specific set of tests, or the entire test suite. Testing can be carried out on a single browser or across multiple browsers simultaneously. By default, tests run in a headless mode, and the test outcomes are displayed in the terminal.

### Run tests using plugin

**`Playwright Test for VSCode`** plugin empowers you to run specific tests or entire test suites directly from the editor. You can conveniently trigger tests with a click, making it efficient to validate changes.

<<<<<<< HEAD
Here are a few examples of how to use the utility functions:

### LocatorUtils

The `LocatorUtils` module provides a set of utility functions that identify locators in different ways in Playwright. Locators are used to identify elements on a web page. They are essential for interacting with web elements and performing actions on them, such as clicking a button or entering text into a form field.

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

1.  `getLocator(selector: string)`: This function returns a Locator object for the given Xpath or CSS selector. The selector parameter is a string representing the Xpath or CSS selector of the element you want to locate.

2.  `getLocatorByTestId(testId: string)`: This function returns a Locator object for the element with the given test ID. The `testId` parameter is a string representing the `testIdAttribute` of the element you want to locate. The default TestID is a `data-testid` attribute that can be added to any web element on the HTML page. The `testIdAttribute` attribute can be configured in the `playwright.config.ts` file.

    For example, if you have the following configuration in your `playwright.config.ts` file:

    ```typescript
    testIdAttribute: 'qa-target';
    ```

    With this configuration, you can directly pass the `qa-target` value to the `getLocatorByTestId` function without the need for any CSS or XPath. This simplifies the process of locating elements on the page, especially when dealing with complex or dynamic content. For more information please refer to [Playwright test id documentation](https://playwright.dev/docs/locators#locate-by-test-id)

3.  `getLocatorByText(text: string)`: This function returns a Locator object for the element with the given text. The text parameter is a string representing the text of the element you want to locate.

4.  `getLocatorByRole(role: string)`: This function returns a Locator object for the element with the given ARIA role. The role parameter is a string representing the ARIA role of the element you want to locate.

5.  `getLocatorByLabel(label: string)`: This function returns a Locator object for the element with the given label. The label parameter is a string representing the label of the element you want to locate.

6.  These locator functions can also be easily used with Locator operators( `and`, `or`) and filters(`filter`). For more information on Locator operators and filters, please refer to [Playwright Locator documentation](https://playwright.dev/docs/locators#filtering-locators)

Here is some more information about `LocatorUtilis` usage as this is a unique POM design pattern

- We use a closure to declare the Locator because the page object is initialized during runtime. If we call the function directly, it may return null due to the page object not being initialized yet. By using a closure, we ensure that we're accessing the page object only after it has been properly initialized.

- For XPath or CSS selectors, we can directly use a string instead of a closure, as these selectors do not involve the page object. This approach allows us to define selectors in a straightforward manner without worrying about the page object's initialization state.

- We are calling the locator function instead of using a constant locator as the page object is initialized during runtime only.

Refer to the [Types](#types) section below for more information on the optional parameters.

#### Frames

The `LocatorUtils` module provides utility functions to handle frames in Playwright. Frames are used in web development to divide the content of a page into multiple, scrollable regions. With Playwright, you can interact with frames in a similar way as you do with separate pages.

Here's how you can use the `LocatorUtils` functions to handle frames easily:

```typescript
import { getFrameLocator, getLocatorInFrame } from '@LocatorUtils';

// Get a Frame
const frame = `[name='test-frame']`;

// Get a FrameLocator
const frameLocator = () => await getFrameLocator(frame);

// Get a Locator on Page
const locator = () => getLocatorByTestId('continue-button');

// Get a locator inside a frame
const locatorInFrame = () => await getLocatorInFrame(frame, locator());
const locatorInFrame = () => await getLocatorInFrame(frameLocator(), locator());
```

In this example, we're using various functions from LocatorUtils to handle frames:

1. `getFrameLocator(frameInput: string | FrameLocator):`: This function returns a FrameLocator object for the given Xpath or CSS selector. The selector parameter is a string representing the Xpath or CSS selector of the frame you want to locate

2. `getLocatorInFrame(frameInput: string | FrameLocator, input: string | Locator):`: This function returns a Locator object inside the frame. The frameInput parameter is a string or Locator representing the frame that you want to locate the element with and the input parameter is a string or Locator of the element you want to locate inside the frame.

These Locator functions make it easier to locate elements on the page, and they provide a more readable and maintainable way to define locators in your tests.

For more information, please refer to [Playwright FrameLocator documentation](https://playwright.dev/docs/api/class-framelocator)

### ActionUtils

The `ActionUtils` module provides a set of utility functions that simplify common actions in Playwright. These functions are designed to make your tests more readable and maintainable and to reduce the amount of boilerplate code you need to write.

Here's an example of how to use the `ActionUtils` functions:

```typescript
import { gotoURL, click, fill, type, check, uploadFiles, selectByValue } from '@ActionUtils';
import { MAX_TIMEOUT } from '@Timeouts';

// Navigate to a URL
await gotoURL('https://www.example.com', { timeout: MAX_TIMEOUT });

// Click an element
await click(`text='Log in'`);

// Fill a form field
await fill(`input#username`, 'myusername');

// Type into a form field
await type(`input#search`, 'searchText');

// Check a checkbox or radio button
await check(`input#agree`);

// Upload files
await uploadFiles(`input#file`, '/path/to/myfile.jpg');

// Select a value from a dropdown
await selectByValue(`#dropdown`, 'selectValue');
```

In this example, we're using various functions from ActionUtils:

1. `gotoURL(path: string, options: GotoOptions)`: This function navigates to a specific URL. The path parameter is the URL you want to navigate to, and the options parameter is an optional parameter that specifies additional navigation options. Here we have overridden the default navigation timeout with MAX_TIMEOUT optional parameter.

2. `click(input: string | Locator, options?: ClickOptions)`: This function clicks an element on the page. The input parameter is a string or Locator representing the element you want to click, and the options parameter is an optional parameter that specifies additional click options.

3. `fill(input: string | Locator, value: string, options?: FillOptions)`: This function fills a form field with a specific value. The input parameter is a string or Locator representing the form field you want to fill, the value parameter is the value you want to fill the form field with, and the options parameter is an optional parameter that specifies additional fill options.

4. `type(input: string | Locator, value: string, options?: TypeOptions)`: This function types into a field character by character, as if it was a user with a real keyboard. The input parameter is a string or Locator representing the form field you want to fill, the value parameter is the value you want to fill the form field with, and the options parameter is an optional parameter that specifies additional type options.

Generally `fill` will work in most cases and has better performance. Generally 'type' is used when we have to enter text in a search box that has autosuggestions. To find more info on `fill` vs `type`, please refer to [Playwright type documentation](https://playwright.dev/docs/input#type-characters).

5. `check(input: string | Locator, options?: CheckOptions)`: This function checks a checkbox or radio button. The input parameter is a string or Locator representing the checkbox or radio button you want to check, and the options parameter is an optional parameter that specifies additional check options.

6. `uploadFiles(input: string | Locator, path: UploadValues, options?: UploadOptions)`: This function is used to upload files. The input parameter is a string or Locator representing the file input you want to upload files to, the path parameter is the path of the files you want to upload, and the options parameter is an optional parameter that specifies additional upload options.

7. `selectByValue(input: string | Locator, value: string, options?: SelectOptions)`: This function selects a value from a dropdown. The `input` parameter is a string or Locator representing the select element, the value parameter is the `value` to select for the dropdown option, and the `options` parameter specifies additional select options.

8. Similarly, we have `selectByText()` and `selectByIndex()` functions for selecting options by text or index, and `selectByValues()` for multi-select dropdowns.

For more information on actions refer to the [Playwright Actions documentation](https://playwright.dev/docs/input) and regarding auto waits refer to [Playwright Auto waiting documentation](https://playwright.dev/docs/actionability)

For more information on the optional parameters refer to the [Types](#types) section below.

### Alerts

The `ActionUtils` module provides utility functions to handle alerts in Playwright. These functions are designed to make your tests more readable, maintainable and to reduce the amount of boilerplate code you need to write.

Here's an example of how to use the `ActionUtils` functions to handle alerts:

```typescript
import { acceptAlert, dismissAlert, getAlertText } from '@ActionUtils';

// Click on an element that opens an alert and then accept the alert
await acceptAlert(outOfStockButton());

// Click on an element that opens an alert and then dismiss the alert
await dismissAlert(outOfStockButton());

// Click on an element that opens an alert and then get the text from the alert
const text = await getAlertText(outOfStockButton());
```

In this example, we're using various functions from ActionUtils to handle alerts:

1. `acceptAlert(input: string | Locator, promptText?: string)`: This function is used to accept an alert dialog. The `input` parameter is a string or Locator representing the element that triggers the alert, and the `promptText` parameter is an optional parameter that specifies the text to enter into a prompt dialog.

2. `dismissAlert(input: string | Locator)`: This function is used to dismiss an alert dialog. The `input` parameter is a string or Locator representing the element that triggers the alert.

3. `getAlertText(input: string | Locator)`: This function is used to get the text from an alert dialog. The `input` parameter is a string or Locator representing the element that triggers the alert.

These functions make it easier to handle alerts in your tests, and they provide a more readable and maintainable way to define alert handling in your tests.
For more information, please refer to [Playwright Alerts documentation](https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs)

### ElementUtils

The `ElementUtils` module provides utility functions for extracting values from web elements and performing condition checks. These functions are designed to handle common tasks related to web elements, such as retrieving text or attribute values, checking visibility, and more.

```typescript
import { getText, getAllTexts, getInputValue, getAttribute, attribute } from '@ElementUtils';
//getting inner text
const text = await getText(textLocator());

//getting all inner texts
const allTexts = await getAllTexts(textLocator());

//getting input value
const inputValue = await getInputValue(userName());

//getting attribute value of 'class'
const attribute = await getAttribute(labelLocator(), 'class');

//visibility condition check
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

## AssertUtils

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

await expectElementToBeHidden(signInButton(), 'signInButton should not be displayed');

await expectElementToHaveText(successfulMessage(), 'Login is successful', {
  ignoreCase: false,
  message: 'Login should be Successful',
});

await expectElementNotToBeChecked(agreeCheckbox(), {
  timeout: INSTANT_TIMEOUT,
});

//with 'soft' optional parameter 'true' we are making this assertion as soft assertion
await expectElementNotToContainText(successfulMessage(), '404 error', {
  soft: true,
});

// use this in the spec file to stop the test if there are failures for any soft assertions
assertAllSoftAssertions(test.info());
```

In this example, we're using various functions from AssertUtils:

1. `expectElementToBeVisible(input: string | Locator, options?: ExpectOptions)`: This function checks if a specific element is visible on the page. The input parameter is a string or Locator representing the element you want to check. The options parameter is an optional parameter that specifies additional options like timeout and a custom message to display in the report if the assertion fails.

2. `expectElementToBeHidden(element: Locator, message?: string, options?: ExpectOptions)`: This function checks if a specific element is hidden on the page. The parameters are the same as expectElementToBeVisible.

3. `expectElementToHaveText(input: string | Locator, text: string | RegExp | Array<string | RegExp>, options?: ExpectOptions & ExpectTextOption)`: This function asserts that the text of a specific element matches the expected text. The input parameter is a string or Locator representing the element from where we assert text, the text parameter is the value you want to assert with, and the ExpectOptions and ExpectTextOption parameters are optional parameters that specify additional assert options like soft assertion, ignore case, etc.

4. `expectElementNotToContainText(element: Locator, unexpectedText: string, options?: ExpectOptions)`: This function checks if a specific element does not contain a certain text. The unexpectedText parameter is the text you expect the element not to contain. The soft assertion is an Expectoptions parameter.

5. `assertAllSoftAssertions(testInfo: TestInfo)`: This function checks if there were any failures in the soft assertions and stops the test if there were. The testInfo parameter is the test information object from Playwright.

These functions make it easier to write assertions in your tests, and they provide better error messages when the assertions fail. They also support both hard and soft assertions, allowing you to choose the appropriate level of strictness for your tests.

Refer to the [Types](#types) section below for more information on the optional parameters.

## Types

The `Types` module provides a set of options for utility modules.

```typescript
import { getLocator, getLocatorByTestId } from '@LocatorUtils';
import { clickAndNavigate, type } from '@ActionUtils';
import { expectElementToHaveText } from '@AssertUtils';
import { STANDARD_TIMEOUT } from '@TimeoutConstants';

const loginpage = () => getLocator(`#loginpage`, { hasText: 'login' });
const successfulMessage = () => getLocatorByTestId(`sucess-message`);

export async function verifyLoginPageisDisplayed() {
  await clickAndNavigate(loginpage(), { button: 'right', force: true, clickCount: 1 });

  await type(`#username`, 'testuser', { delay: 2, noWaitAfter: false });

  await expectElementToHaveText(successfulMessage(), 'Login is Successful', {
    useInnerText: true,
    ignoreCase: false,
    timeout: STANDARD_TIMEOUT,
  });
}
```

In this example, we're using some Types optional parameters with utility functions:

1. `Locator options`: `hasText` is used as an optional parameter to locate the element that has the given text.

2. `Action Options(ClickOptions)`: `button` is used for right-click, `force` is used to bypass the actionability checks and force the click, and `clickCount` is used to click the element for the given number of times.

3. `Action Options(TypeOptions)`: `delay` is used to simulate the delay between the key presses with the given time, `noWaitAfter` is used to specify not to wait after the action `type`.

4. `ExpectOptions(ExpectTextOptions)`: `useInnerText` is used to assert the inner text, `ignoreCase` is used to ignore the case while asserting, and `timeout` is used to wait until the specified time before failing the test.

## Running Tests

### Run tests using the Playwright plugin

To run the tests using the Playwright plugin in Visual Studio Code, please follow the instructions below:

#### Playwright Plugin Installation:

1. Click on the `Extensions` icon in Visual Studio Code and search for `Playwright`.

2. Select and install the `Playwright Test for VSCode` plugin.

#### Running Tests with the Plugin:

1. Once the plugin is installed, you will see a small green `Play` button next to each test in your spec files.

2. Clicking on the `Play` button will execute the test. You can either execute individual tests or all tests together within the spec file.

![Running Tests](https://blog.jetbrains.com/wp-content/uploads/2023/06/OpenProject.png)

# The Playwright plugin for Visual Studio Code provides a convenient way to run your tests directly from your code editor, without having to switch to the terminal.

For detailed guidance on plugin installation, configuring test settings in the playwright.config file, and executing tests, please visit [Executing tests using a Playwright plugin](docs/ExecutingTests.md#run-tests-using-the-playwright-plugin).

> > > > > > > 2337574b368863f90b3c329fa56455c91ba36507

### Parallel Execution

Playwright allows you to execute tests in parallel across multiple workers. This can significantly speed up your test suite.

To enable parallel execution, add the following line at the top of your spec file, above the `test` block:

```typescript
test.describe.configure({ mode: 'parallel' });
```

The number of workers can be configured either in the `playwright.config` file or via the command-line interface.

### Running Tests via the Command-Line Interface

Utilize a variety of commands to execute your tests in different modes. Below are a few illustrative examples:

#### npm run commands

The `package.json` file contains several scripts designed to streamline test execution. Here are a few common examples:

- To run a single test in chromium headed mode (i.e., with the browser UI visible), use the `grep` command to specify the test:

```bash
npm run test:chromium-headed -- -g 'login test'
```

- To run all the tests in a spec file in chromium headless mode:

```bash
npm run test:chromium -- nucleus.spec.ts
```

- To run all the tests in multiple spec files in headed mode:

```bash
npm run test:chromium-headed -- checkout.spec.ts nucleus.spec.ts
```

- To run all the tests in a spec file with 3 threads, and 2 retries in chromium headless mode:

```bash
npm run test:chromium -- nucleus.spec.ts -j 3 --retries 2
```

- To run in debug mode:

```bash
npm run test:chromium-headed -- nucleus.spec.ts --debug
```

- To run all the smoke tests using the tag in headless mode for all the projects:

```bash
npm run test -- -g '@smoke'
```

- To run all tests in headless mode for all the projects:

```bash
npm run test
```

#### npx playwright test commands

You can use the following playwright commands as well to run your tests:

```bash
npx playwright test -c playwright.config.ts -g "logo is present @reg" --headed -j 1 --retries 0
```

Here's what each option does:

- `-c`: Specifies the configuration file for Playwright. In this case, it's `playwright.config.ts`.
- `-g`: This is the "grep" option, which allows you to run specific tests instead of all of them. In this case, it's running the test with the name "logo is present @reg".
- `-j`: Specifies the number of workers to use. In this case, it's `1`.
- `--retries`: Specifies the number of times to retry failed tests. In this case, it's `0`.
- `--headed`: Runs the tests in headed mode. By default, tests are run in headless mode.
- `--project=chromium`: Runs the tests in the Playwright Chromium browser. By default, it will run all the projects in the playwright.config.ts
- `--repeat-each 3`: Repeats each test 3 times. This is useful for verifying the stability of a test or checking intermittent issue fixes locally by running the test multiple times.
- `--grep-invert`: The opposite of `-g` or grep. It filters out the tests to run.
- `--max-failures 4`: Stops after the first 4 test failures. This includes a count of failures in the retry test as well.
- `--list`: Lists all the tests, but does not run them.

[![CLI Parallel Execution](http://img.youtube.com/vi/gtkoLizAsaw/0.jpg)](https://www.youtube.com/watch?v=gtkoLizAsaw 'CLI Parallel Execution')

For more information, please refer to the [Playwright CLI documentation](https://playwright.dev/docs/test-cli).

## Report Generation and Viewing

Playwright Test offers several built-in reporters tailored for various requirements, along with the flexibility to integrate custom reporters. You can configure these reporters either through the command line or within the `playwright.config.ts` file. For a comprehensive guide on Playwright's in-built reporters, refer to the official [documentation](https://playwright.dev/docs/test-reporters).

### Accessing Reports via Command-Line Interface (CLI)

- **Playwright command**: After executing tests, you can view the reports using the following command:

```bash
npx playwright show-report <path to the report>
```

- **Framework Configured script**: This framework's configuration for viewing reports is defined in the `package.json` under the `scripts` section:

```json
"report": "playwright show-report playwright-report"
```

To access the reports post-test execution using this configuration, run:

```bash
npm run report
```

## Additional Playwright Features

- **UI Mode**: Playwright's UI mode allows you to explore, run, and debug tests in a watch mode. Dive deeper into this feature [here](https://playwright.dev/docs/test-ui-mode).

- **Test Generator**: With Playwright, you can automatically generate tests. It inspects the page to determine the optimal locator, prioritizing by role, text, and test ID locators. Learn more about test generation using Codegen [here](https://playwright.dev/docs/codegen).

- **Trace Viewer**: The Playwright Trace Viewer offers a graphical interface to review recorded traces post-execution. Get more details [here](https://playwright.dev/docs/trace-viewer).

## Best Practices

Here are some recommended best practices when using this framework:

- **Use Utility Functions**: Whenever possible, use the [Utilities](docs/Utilities.md) functions provided in the framework instead of directly using Playwright methods. These utility functions are designed to simplify common tasks and make your tests more readable and maintainable.

- **Feedback on Utility Functions**: If you find that a utility function for a specific action or assertion is missing, please provide feedback so we can continue to improve and expand our utility Functions. Meanwhile, temporarily use the corresponding Playwright method combined with `getPage` from `@PageSetup` for a specific task, the utility function is not available. Replace these with newly added utility functions once they are available.

- **Conditional Statements**: Instead of manually implementing waits, use functions like `isElementVisible`, `isElementChecked` from [elementutils](docs/Utilities.md#elementutils). These functions automatically wait for the element to become visible, with customizable timeout options. It's advisable to avoid using these for assertions; instead, utilize [AssertUtils](docs/Utilities.md#assertutils) wherever possible.

- **Retrieving Text and Input Values**: To fetch texts or input values, consider functions like `getAllTexts` and `getAllInputValues` from [elementutils](docs/Utilities.md#elementutils). These methods come with built-in waits, ensuring they only proceed once an element is available, preventing premature returns of an empty Array<string>.

- **clickandNavigate vs click**: If a click action triggers page navigation, use the `clickandNavigate` utility function instead of the `click` function. `clickandNavigate` function includes built-in checks for frame navigation and waits for a new page to load. Use the `click` function if it is an Ajax call when you don't navigate to a different page.

- **Fill vs Type**: Use the fill utility function as default to fill form fields. Use type when you want to simulate typing character by character, such as when testing auto-search suggestions or autofill features. [Playwright type documentation](https://playwright.dev/docs/input#type-characters)

- **Web-First Assertions**: Prioritize using playwright web-first assertions in your tests instead of jest or other library assertions. [Playwright Web First Assertions documentation](https://playwright.dev/docs/best-practices#use-web-first-assertions)

- **Soft Assertions for Non-Critical Checks**: Use a soft assertion when a test assertion isn't critical, allowing the test to continue and fail at the end. For critical assertions, use a hard assertion i.e. the default assertion. [Playwright Soft Assertions documentation](https://playwright.dev/docs/test-assertions#soft-assertions)

- **Backticks for Xpath & CSS**: Always use backticks for Xpath & CSS selectors so that you can use single & double quotes together if needed without any escape characters.

- **Playwright's Inbuilt Features**: Playwright comes with a wide range of inbuilt features. Make sure to utilize these as needed.
  - [Local Webserver](https://playwright.dev/docs/test-webserver)
  - [Mocking](https://playwright.dev/docs/mock)
  - [Parallelism and sharding](https://playwright.dev/docs/test-parallel)
  - [Playwright Configuration](https://playwright.dev/docs/test-configuration)
    - [use Options](https://playwright.dev/docs/test-use-options)
    - [TestConfig](https://playwright.dev/docs/api/class-testconfig)
  - [Mobile Emulation](https://playwright.dev/docs/emulation)
  - [Playwright Test methods](https://playwright.dev/docs/api/class-test)
  - [Debugging](https://playwright.dev/docs/debug)

In addition to these, Playwright also recommends following certain best practices. You can find more details in the [Playwright Best Practices documentation](https://playwright.dev/docs/best-practices)

## Contribution guide

Contributions are welcome! Please read the contributing guidelines first. (In progress)
