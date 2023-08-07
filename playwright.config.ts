import { ACTION_TIMEOUT, EXPECT_TIMEOUT, NAVIGATION_TIMEOUT, TEST_TIMEOUT } from '@TimeoutConstants';
import { WaitForLoadStateOptions } from 'tests/setup/Types';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const BASE_URL = process.env.URL || 'https://www.amazon.com';
const startLocalHost = process.env.URL && process.env.URL.includes('localhost');
/* Default LoadsSate while Loading url, clickAndNavigate */
export const LOADSTATE: WaitForLoadStateOptions = 'domcontentloaded';
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
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
  reporter: process.env.CI ? 'dot' : [['./tests/setup/CustomReporterConfig.ts'], ['html', { open: 'never' }], ['dot']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  globalSetup: require.resolve('./tests/setup/GlobalSetup.ts'),
  globalTeardown: require.resolve('./tests/setup/GlobalTeardown.ts'),
  timeout: TEST_TIMEOUT, // Individual test timeout to prevent tests from hanging indefinitely
  expect: {
    timeout: EXPECT_TIMEOUT, // Timeout for assertions such as element being visible, hidden, or the page having a specific URL
  },
  use: {
    headless: true,
    //Setting extra headers for CloudFlare
    extraHTTPHeaders: {
      'CF-Access-Client-Id': process.env.CF_CLIENT_ID || '',
      'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET || '',
    },
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    testIdAttribute: 'qa-target',
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure', // Record traces after each test failure

    screenshot: 'only-on-failure', // Capture screenshots after each test failure
    actionTimeout: ACTION_TIMEOUT, // Timeout for actions like click, fill, select
    // Timeout for page loading navigations like goto URL, go back, reload, waitForNavigation
    navigationTimeout: NAVIGATION_TIMEOUT,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1600, height: 1000 },
        launchOptions: {
          args: ['--disable-web-security'],
          // args: ["--disable-web-security","--auto-open-devtools-for-tabs"],
          slowMo: 0,
        },
      },
    },

    /******* Uncomment to run tests in other browsers  
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1600, height: 1000 },
        launchOptions: {
          firefoxUserPrefs: {
            'browser.cache.disk.enable': false,
            'browser.cache.memory.enable': false,
          },
        },
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1600, height: 1000 },
      },
    },

    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    // Test against branded browsers.
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    }, 
    
  ***************/
  ],

  ...(startLocalHost && {
    webServer: {
      command: 'cd ~/repos/ui && npm start ui-server',
      port: 9002,
      timeout: 60 * 1000,
      reuseExistingServer: !process.env.CI,
      stdout: 'pipe',
      stderr: 'pipe',
    },
  }),
});
