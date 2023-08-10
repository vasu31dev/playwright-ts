## Framework Setup

1. `globalsetup.ts`: This file contains the global setup function that is executed once before all test files. It is typically used for setting up global states such as database connections or configuring the test environment like setting environment variables.

2. `globalteardown.ts`: This file contains the global teardown function that is executed once after all test files. It is typically used for cleaning up the global states such as closing database connections or resetting the test environment.

3. `pagesetup.ts`: This file contains the setup function for the Page object from Playwright. It is used for setting up the page before each test. This is where you can add any common setup code that should run before each test across all spec files.

4. `pagefactory.ts`: This file contains the functions of the PageFactory. These functions are used for managing Page objects, including getting and setting Page objects, switching between pages, and closing a page. This centralizes the management of Page objects, making it easier to control the state of your tests.

5. `types.ts`: This file contains type definitions that are used across the framework as optional parameters for the utility methods.

### Page set up and Switching Pages

The `pagefactory.ts` provides functions for setting up a page and managing Page objects during tests. Here are examples of how to switch between pages and close a page:

```typescript
import { setupPage, switchPage, switchToDefaultPage, closePage } from '@PageFactory';

//This function is responsible for configuring the page prior to each test and is employed within the pagesetup function using the beforeEach hook.
setupPage(page);

// Switch to the second tab/window. Useful when a test involves interacting with multiple pages.
await switchPage(2);

// Switch to the initial page that was launched or the first tab/window. Useful when you want to return to the starting context after interacting with other pages.
switchToDefaultPage();

// Close the current page and then switch to the default page if it exists. Useful for cleaning up after a test that opens additional pages.
await closePage();
```
