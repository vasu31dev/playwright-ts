import { SMALL_TIMEOUT, STANDARD_TIMEOUT, TEST_TIMEOUT } from "@AssertUtils";
import { defineConfig, devices } from "@playwright/test";

const BASE_URL =
  process.env.URL || "https://www.amazon.com/";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : 6,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //allure-playwright
  reporter: process.env.CI ? 'dot' : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  globalSetup: require.resolve("./tests/utils/GlobalSetup.ts"),
  timeout: TEST_TIMEOUT, // Individual test timeout to prevent tests from hanging indefinitely
  expect: {
    timeout: SMALL_TIMEOUT, // Timeout for assertions such as element being visible, hidden, or the page having a specific URL
  },
  use: {
    headless: true,
    //Setting extra headers for CloudFlare
    extraHTTPHeaders: {
      "CF-Access-Client-Id": process.env.CF_CLIENT_ID || "",
      "CF-Access-Client-Secret": process.env.CF_CLIENT_SECRET || "",
    },
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    testIdAttribute: "qaid",
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure", // Record traces after each test failure

    screenshot: "only-on-failure", // Capture screenshots after each test failure
    actionTimeout: SMALL_TIMEOUT, // Timeout for actions like click, fill, select
    // Timeout for page loading navigations like goto URL, go back, reload, waitForNavigation
    navigationTimeout: STANDARD_TIMEOUT,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1600, height: 1000 },
        launchOptions: {
          args: ["--disable-web-security"],
          slowMo: 0,
        },
      },
    },

  ],
});


    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     viewport: { width: 1600, height: 1000 },
    //     launchOptions: {
    //       firefoxUserPrefs: {
    //         "browser.cache.disk.enable": false,
    //         "browser.cache.memory.enable": false,
    //       },
    //     },
    //   },
    // },

    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //     viewport: { width: 1600, height: 1000 },
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },




      /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },