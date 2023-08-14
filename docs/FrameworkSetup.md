## Framework Setup

1. `global-setup.ts`: This file contains the global setup function that is executed once before all test files. It is typically used for setting up global states such as database connections or configuring the test environment like setting environment variables.

2. `global-teardown.ts`: This file contains the global teardown function that is executed once after all test files. It is typically used for cleaning up the global states such as closing database connections or resetting the test environment.

3. `page-setup.ts`: This file contains the setup function for the Page object from Playwright. It is used for setting up the page before each test. This is where you can add any common setup code that should run before each test across all spec files.

4. `optional-parameter-types.ts`: This file contains type definitions that are used across the framework as optional parameters for the utility methods.

### Page set up

The `page-utils.ts` provides functions for setting up a page and managing Page objects during tests. Here are examples of how to switch between pages and close a page:

```typescript
import { setupPage } from '@PageUtils';

//This function is responsible for configuring the page prior to each test and is employed within the page-setup function using the beforeEach hook.
setupPage(page);
```
