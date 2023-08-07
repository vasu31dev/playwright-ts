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

- **Unique Page Object Model Design Pattern**: Our Page Object Model (POM) design stands apart from traditional POMs. It's a unique approach that significantly reduces complexity and accelerates coding, making it easier and faster to write scripts compared to traditional POMs. This means less time spent on setup and more time spent on creating effective tests. [Discover how our approach differs with the traditional POM](https://playwright.dev/docs/pom).

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
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Guide to Updating the Project](#project-update-guide)
- [**Project Structure**](#project-structure)
- [**Framework Setup**](#framework-setup)
  - [Switching Pages](#pagefactory)
- [**Usage**](#usage)
  - [Working with Page Objects](#page-objects)
  - [Creating a Spec File](#writing-tests-in-a-spec-file)
  - [Using Test Annotations](#test-annotations)
- [**Utilities**](#utilities)
  - [Locator Utilities](#locatorutils)
  - [Handling Frames](#frames)
  - [Action Utilities](#actionutils)
  - [Managing Alerts](#alerts)
  - [Element Utilities](#elementutils)
  - [Assertion Utilities](#assertutils)
  - [Optional Parameter Objects](#types)
- [**Executing Tests**](#running-tests)
  - [Using the Playwright Plugin](#run-tests-using-the-playwright-plugin)
  - [Command-Line Execution](#running-tests-via-the-command-line-interface)
  - [Report Generation and Viewing](#viewing-reports)
- [**Exploring Additional Playwright Features**](#additional-playwright-features)
- [**Best Practices**](#best-practices)
- [**Contributing to the Project**](#contributing)

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

Ensure you have the following software installed on your machine:

- **[npm (v8.0.0 or later)](https://docs.npmjs.com/cli/v9/configuring-npm)**: Package manager for JavaScript, used to install and manage software packages.
  - To verify your current version, use the command `npm -v`.
  - If npm isn't installed, follow the [npm installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- **[Node.js (v16.0.0 or later)](https://nodejs.org/en/download)**: JavaScript runtime built on Chrome's V8 JavaScript engine, allowing the execution of JavaScript server-side.
  - To verify your current version, use the command `node -v`.
- **[Git](https://git-scm.com/downloads)**: Distributed version control system used to track changes in source code during software development.
  - To check if Git is installed, run the command `git --version`.
  - If Git isn't installed, download and install it from the [official Git website](https://git-scm.com/downloads).
- **VSCode Plugins**:
  - **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: A tool for consistent code formatting.
  - **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: A tool for identifying and fixing linting issues.
- **VSCode Settings**: To ensure consistency with the prettier format settings, apply the following configurations in your VSCode settings (use Cmd + , to access settings):
  - **Quote Style**: Set `typescript.preferences.quoteStyle` to `single` for consistent quote usage across your code.
  - **Format On Save**: Enable `Format On Save Mode` and set it to `file`. This ensures your code is automatically formatted every time you save, enhancing readability and consistency.

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

5. (Optional) Git User setup for the first time. If you are a code/test contributor, set up your user in GIT using the commands:

   ```bash
   git config user.email "<your-email>"
   git config user.name "<your-name>"
   git remote set-url origin https://USERNAME:SECRETTOKEN@github.com/vasu31dev/playwright-ts.git
   ```

   Replace `<USERNAME>` with your GitHub username and `<SECRETTOKEN>` with your GitHub personal access token. If you don't have a personal access token, you can create one in your GitHub account settings following this [GitHub guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

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

3. If there are dependency errors while installing packages, you can remove the node_modules folder and install the packages again. This step can help resolve potential conflicts or issues with dependencies.

```bash
rm -rf node_modules
npm install
```

4. Update Playwright browsers as needed

```bash
npx playwright install
```

## Project Structure

This project is meticulously organized into distinct packages and files, each tailored for a specific purpose:

- **.husky**: Husky streamlines the management of Git hooks, allowing for the execution of specific scripts during various Git stages. In this framework, Husky is configured to prevent commits with linting errors by running the `npm run lint` command (which maps to `eslint . --ext .ts` as defined in `package.json` under the `scripts` section) before every commit. If linting errors are detected, commits are halted until the issues are addressed.

  > **Tip**: Quickly rectify linting errors by running the `npm run lint:fix` command. Once resolved, you can proceed with commits if the Husky hook is successful.

- **tests**: This directory houses the framework setup, end-to-end test files, API tests, and associated utilities. The tests are organized as:

- **setup**: This directory is pivotal for initializing the testing framework and setting up the environment. It contains configurations, initializations, and any global setups required for the tests to run. The [Framework and Page setup](#framework-setup) section provides a deeper dive into how the framework is structured and how pages are initialized for testing.

- **pages**: This is where the [page objects](#page-objects) reside. Page Object Model (POM) is a design pattern that allows for better test maintenance and reduces code duplication. Each file in this directory typically represents a page or a component of the application, encapsulating the elements and actions specific to that page or component.

- **testdata**: This directory is dedicated to storing test data, which is often externalized from test scripts to allow for easier management and data-driven testing. The data is primarily formatted as JSON objects, making it easily readable and modifiable without delving into the test scripts themselves.

- **specs**: Here, you'll find all the [spec files](#writing-tests-in-a-spec-file). These are the actual test scripts, written to test specific functionalities or features of the application. Each spec file usually corresponds to a feature or functionality, containing one or multiple test scenarios related to it.

- **utils**: A crucial directory that encompasses all test-related [utility functions](#utilities). These are reusable functions or methods written to perform common tasks, be it related to data manipulation, element interaction, or any other recurrent actions or assertions in the test scripts.

- **.eslintrc**: This file is the heart of the ESLint configuration. ESLint is a static code analysis tool that identifies problematic patterns found in Typescript code. The configurations in `.eslintrc` dictate the rules and standards the code should adhere to, ensuring consistency and best practices across the codebase.

- **.prettierrc**: Prettier is an opinionated code formatter, ensuring that the code adheres to a consistent style. The `.prettierrc` file contains the specific formatting rules, like line length, indentation, and more, ensuring that every developer working on the project produces code with a consistent style.

- **.gitignore**: This file ensures the repository's cleanliness by listing files and directories that Git should not track. It typically excludes node modules, build folders, and temporary files, ensuring only essential code and files are versioned.

- **README.md**: The initial file seen in a repository, the `README.md` offers a snapshot of the project. It details the project's purpose, setup instructions, and usage. A well-structured README aids in onboarding new developers and offers clarity to stakeholders.

- **package.json**: Acts as the manifest for your project, detailing metadata like the project's name, version, and description. More importantly, it lists the project's dependencies and devDependencies, scripts that can be run, and other configurations.
- **package-lock.json**: This is an auto-generated file that provides a detailed versioning of each package and its dependencies. It ensures that every install results in the exact same file structure in `node_modules` across all setups, leading to consistent behavior and builds.

- **playwright.config.ts**: This configuration file is pivotal for the Playwright testing framework. It centralizes settings specific to Playwright, detailing configurations for various browsers (like Chrome, Firefox, Safari) and devices. Within this file, you can specify configurations such as viewport sizes, user agent strings, launch options, and more. These settings ensure that tests run consistently across different environments and scenarios, replicating real-world conditions.

- **tsconfig.json**: This configuration file is essential for TypeScript projects. It specifies the root files and the compiler options required to compile the TypeScript project. It can dictate various settings, from target JavaScript version, module system, source map options, to including or excluding specific files or directories.

- **playwright-report**: This directory is auto-generated during the initial test run, based on the [Playwright reporters](https://playwright.dev/docs/test-reporters) configuration. The report file is updated after each test run. For more on viewing the reports, see [here](#viewing-reports).

## Framework Setup

1. `GlobalSetup.ts`: This file contains the global setup function that is executed once before all test files. It is typically used for setting up global states such as database connections or configuring the test environment like setting environment variables.

2. `GlobalTeardown.ts`: This file contains the global teardown function that is executed once after all test files. It is typically used for cleaning up the global states such as closing database connections or resetting the test environment.

3. `PageSetup.ts`: This file contains the setup function for the Page object from Playwright. It is used for setting up the page before each test. This is where you can add any common setup code that should run before each test across all spec files.

4. `PageFactory.ts`: This file contains the functions of the PageFactory. These functions are used for managing Page objects, including getting and setting Page objects, switching between pages, and closing a page. This centralizes the management of Page objects, making it easier to control the state of your tests.

5. `Types.ts`: This file contains type definitions that are used across the framework as optional parameters for the utility methods.

### PageFactory

The PageFactory provides functions for managing Page objects during tests. Here are examples of how to switch between pages and close a page:

```typescript
import { switchPage, switchToDefaultPage, closePage } from '@PageFactory';

// Switch to the second tab/window. Useful when a test involves interacting with multiple pages.
await switchPage(2);

// Switch to the initial page that was launched or the first tab/window. Useful when you want to return to the starting context after interacting with other pages.
switchToDefaultPage();

// Close the current page and then switch to the default page if it exists. Useful for cleaning up after a test that opens additional pages.
await closePage();
```

## Usage

### Page Objects

Page objects are utilized to encapsulate information about the elements present on each page of your application. They also provide a structured way to write action and assertion functions for various functionalities on each page. This approach promotes code reusability and makes the tests easier to maintain and understand. Page objects can be found in the `pages` directory.

Here's an example of a page object under the `pages` package:

**sauceDemo.ts**

```typescript
//importing utility functions
import { click, clickAndNavigate, fill, gotoURL } from '@ActionUtils';
import {
  failureLoginCredentials,
  successLoginCredentials,
} from '../testdata/SauceDemoTestData';
import { expectElementToBeVisible } from '@AssertUtils';
import {
  getLocator,
  getLocatorByPlaceholder,
  getLocatorByRole,
} from '@LocatorUtils';

const userName = () => getLocator(`#user-name`);
const password = () =>
  getLocatorByPlaceholder('Password', { exact: true }).nth(0);
const login = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = () => getLocator(`//*[contains(@class,'error-message')]`);

export async function navigateToSauceDemoLoginPage() {
  await gotoURL('https://www.saucedemo.com/');
}

export async function logInSuccessfully() {
  await fill(userName(), successLoginCredentials.username);
  await fill(password(), successLoginCredentials.password);
  await clickAndNavigate(login());
}

export async function failureLogin() {
  await fill(userName(), failureLoginCredentials.username);
  await fill(password(), failureLoginCredentials.password);
  await click(login());
}

export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage());
}
```

In this example, the `SauceDemoLoginPage` represents a login page in the application. It has methods to navigate to the Saucedemo homepage, perform a success and failure login action, check if the login was successful in successful login case and check if the error message displayed in failure login case

Refer [Utilities](#utilities) section for more information on Utilities.

Refer to the [Running Tests](#running-tests) section below on how to run tests.

### Writing Tests in a spec file

Tests are written in the `specs` directory. Each test file should correspond to a specific feature or functionality of the application under test. Tests are constructed using Page objects.

Here's an example of a test file under the `specs` directory:

**sauceDemo.spec.ts**

```typescript
//import test from PageSetup.ts which sets up the page before each test
import { test } from '@PageSetup';

//importing page objects to use all functions within that page to construct the tests
import * as LoginPage from 'tests/pages/SauceDemoLoginPage';
import * as MiniCart from 'tests/pages/SauceDemoMiniCart';
import * as ProductsPage from 'tests/pages/SauceDemoProductsPage';

test.describe('Sauce demotests for successful login and add products to cart', () => {
  test('Saucedemo tests - successful login', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed on successful login
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - Add product to cart', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.addGivenProductToCart(1);
    await MiniCart.verifyMiniCartCount('1');
  });
});
```

In this example, we are setting the page state by importing `test` from `@PageSetup` and writing the spec file. Here are some important points to note:

1. Import `test` from `@PageSetup` instead from `@playwright/test`. `@PageSetup` is customized for this framework to set the page state. This ensures that the page is set up correctly before each test.

2. `setPage` function from `Pagesetup` file will set the page state before each test and is imported to our spec files while executing the tests. If you want to use the Playwright page directly to write our tests, we can use `getPage` function from 'PageFactory' file. The page object is managed by the framework, and we can use the `setPage` and `getPage` functions to set and get the page state, ensuring that all of the pages operate on the same page object.

3. We first navigate to the home page, then perform the login action, and finally verify if the login was successful.

In this example, the `LoginPage` represents a login page in the application. It has methods to navigate to the homepage, perform a login action, and check if the login was successful. Similarly, `ProductsPage` and `MiniCart` are also the page objects that has the functions for the respective pages.

Refer [Utilities](#utilities) section for more information on Utilities.

Refer to the [Running Tests](#running-tests) section below on how to run tests.

### Test annotations

Test annotations are a powerful feature of Playwright Test that allows you to modify the behavior of individual tests. You can use them to mark a test as slow, skip it, indicate that it needs to be fixed, group tests, and much more. They provide a flexible way to manage your tests and handle different scenarios.

Here are some examples of how to use test annotations:

```typescript
import { test } from '@PageSetup';

test.fixme(
  'This test will fail and needs to be fixed so it will be skipped',
  async () => {},
);

test.slow('Triples the default timeouts for this test', async () => {});

test.skip('Skip this test', async () => {});
```

1. `fixme`: marks the test as failing. Playwright Test will not run this test. Use `fixme` when running the test is slow, crashes, or needs any fixes. This allows you to temporarily disable a test until it can be fixed.

2. `slow`: marks the test as slow and triples the timeout. Use `slow` when a test takes longer than usual to complete. This allows Playwright Test to adjust its behavior and avoid prematurely terminating the test.

3. `skip`: marks the test as irrelevant. Playwright Test does not run such a test. Use skip when a test is not applicable in some configurations. This allows you to exclude certain tests based on specific conditions or configurations.

For more info on test annotations, please refer to [Playwright Test Annotations documentation](https://playwright.dev/docs/test-annotations)

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
import {
  gotoURL,
  click,
  fill,
  type,
  check,
  uploadFiles,
  selectByValue,
} from '@ActionUtils';
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
import { getLocator } from '@LocatorUtils';
import { clickAndNavigate, type } from '@ActionUtils';
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

The Playwright plugin for Visual Studio Code provides a convenient way to run your tests directly from your code editor, without having to switch to the terminal.

### Parallel Execution

Playwright allows you to execute tests in parallel across multiple workers. This can significantly speed up your test suite.

To enable parallel execution, add the following line at the top of your spec file, above the `test` block:

```typescript
test.describe.configure({ mode: 'parallel' });
```

The number of workers can be configured either in the `playwright.config` file or via the command-line interface.

### Running Tests via the Command-Line Interface

You can use various commands to run your tests in different modes. Here are some examples:

#### npm run commands

The `package.json` file includes various scripts that simplify running your tests. Here are some examples:

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

For more information, please refer to the [Playwright CLI documentation](https://playwright.dev/docs/test-cli).

## Viewing Reports

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

- **Use Utility Functions**: Whenever possible, use the [Utilities](#utilities) functions provided in the framework instead of directly using Playwright methods. These utility functions are designed to simplify common tasks and make your tests more readable and maintainable.

- **Feedback on Utility Functions**: If you find that a utility function for a specific action or assertion is missing, please provide feedback so we can continue to improve and expand our utility Functions. Meanwhile, temporarily use the corresponding Playwright method combined with `getPage` from `@PageSetup` for a specific task, the utility function is not available. Replace these with newly added utility functions once they are available.

- **Conditional Statements**: Instead of manually implementing waits, use functions like `isElementVisible`, `isElementChecked` from [ElementUtils](#elementutils). These functions automatically wait for the element to become visible, with customizable timeout options. It's advisable to avoid using these for assertions; instead, utilize [AssertUtils](#assertutils) wherever possible.

- **Retrieving Text and Input Values**: To fetch texts or input values, consider functions like `getAllTexts` and `getAllInputValues` from [ElementUtils](#elementutils). These methods come with built-in waits, ensuring they only proceed once an element is available, preventing premature returns of an empty Array<string>.

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

## Contributing

Contributions are welcome! Please read the contributing guidelines first. (In progress)
