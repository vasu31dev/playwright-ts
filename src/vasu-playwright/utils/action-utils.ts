/**
 * action-utils.ts: This module provides a set of utility functions for performing various actions in Playwright tests.
 * These actions include navigation, interaction with page elements, handling of dialogs, and more.
 */
import { Dialog, Locator, Response } from '@playwright/test';
import { getPage } from './page-utils';
import {
  CheckOptions,
  ClearOptions,
  ClickOptions,
  DoubleClickOptions,
  DragOptions,
  FillOptions,
  GotoOptions,
  HoverOptions,
  NavigationOptions,
  SelectOptions,
  TimeoutOption,
  TypeOptions,
  UploadOptions,
  UploadValues,
  WaitForLoadStateOptions,
} from '../setup/optional-parameter-types';
import { STANDARD_TIMEOUT } from './timeout-constants';
import { LOADSTATE } from '../../../playwright.config';
import { getLocator } from './locator-utils';

/**
 * 1. Navigations: This section contains functions for navigating within a web page or between web pages.
 * These functions include going to a URL, waiting for a page to load, reloading a page, and going back to a previous page.
 */

/**
 * Navigates to the specified URL.
 * @param {string} path - The URL to navigate to.
 * @param {GotoOptions} options - The navigation options.
 * @returns {Promise<null | Response>} - The navigation response or null if no response.
 */
export async function gotoURL(path: string, options: GotoOptions = { waitUntil: LOADSTATE }): Promise<null | Response> {
  return await getPage().goto(path, options);
}

/**
 * Waits for a specific page load state.
 * @param {NavigationOptions} options - The navigation options.
 */
export async function waitForPageLoadState(options?: NavigationOptions): Promise<void> {
  let waitUntil: WaitForLoadStateOptions = LOADSTATE;

  if (options?.waitUntil && options.waitUntil !== 'commit') {
    waitUntil = options.waitUntil;
  }

  await getPage().waitForLoadState(waitUntil);
}

/**
 * Reloads the current page.
 * @param {NavigationOptions} options - The navigation options.
 */
export async function reloadPage(options?: NavigationOptions): Promise<void> {
  await Promise.all([getPage().reload(options), getPage().waitForEvent('framenavigated')]);
  await waitForPageLoadState(options);
}

/**
 * Navigates back to the previous page.
 * @param {NavigationOptions} options - The navigation options.
 */
export async function goBack(options?: NavigationOptions): Promise<void> {
  await Promise.all([getPage().goBack(options), getPage().waitForEvent('framenavigated')]);
  await waitForPageLoadState(options);
}

/**
 * Waits for a specified amount of time.
 * @param {number} ms - The amount of time to wait in milliseconds.
 */
export async function wait(ms: number): Promise<void> {
  // eslint-disable-next-line playwright/no-wait-for-timeout
  await getPage().waitForTimeout(ms);
}

/**
 * 2. Actions: This section contains functions for interacting with elements on a web page.
 * These functions include clicking, filling input fields, typing, clearing input fields, checking and unchecking checkboxes, selecting options in dropdowns, and more.
 */

/**
 * Clicks on a specified element.
 * @param {string | Locator} input - The element to click on.
 * @param {ClickOptions} options - The click options.
 */
export async function click(input: string | Locator, options?: ClickOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.click(options);
}

/**
 * Clicks on a specified element and waits for navigation.
 * @param {string | Locator} input - The element to click on.
 * @param {ClickOptions} options - The click options.
 */
export async function clickAndNavigate(input: string | Locator, options?: ClickOptions): Promise<void> {
  const timeout = options?.timeout || STANDARD_TIMEOUT;
  await Promise.all([click(input, options), getPage().waitForEvent('framenavigated', { timeout: timeout })]);
  await getPage().waitForLoadState(options?.loadState || LOADSTATE, {
    timeout: timeout,
  });
}

/**
 * Fills a specified element with a value.
 * @param {string | Locator} input - The element to fill.
 * @param {string} value - The value to fill the element with.
 * @param {FillOptions} options - The fill options.
 */
export async function fill(input: string | Locator, value: string, options?: FillOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.fill(value, options);
}

/**
 * Fills a specified element with a value and press Enter.
 * @param {string | Locator} input - The element to fill.
 * @param {string} value - The value to fill the element with.
 * @param {FillOptions} options - The fill options.
 */
export async function fillAndEnter(input: string | Locator, value: string, options?: FillOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.fill(value, options);
  await locator.press('Enter');
}

/**
 * Types a value into a specified element.
 * @param {string | Locator} input - The element to type into.
 * @param {string} value - The value to type.
 * @param {TypeOptions} options - The type options.
 */
export async function type(input: string | Locator, value: string, options?: TypeOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.type(value, options);
}

/**
 * Clears the value of a specified element.
 * @param {string | Locator} input - The element to clear.
 * @param {ClearOptions} options - The clear options.
 */
export async function clear(input: string | Locator, options?: ClearOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.clear(options);
}

/**
 * Checks a specified checkbox or radio button.
 * @param {string | Locator} input - The checkbox or radio button to check.
 * @param {CheckOptions} options - The check options.
 */
export async function check(input: string | Locator, options?: CheckOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.check(options);
}

/**
 * Unchecks a specified checkbox or radio button.
 * @param {string | Locator} input - The checkbox or radio button to uncheck.
 * @param {CheckOptions} options - The uncheck options.
 */
export async function uncheck(input: string | Locator, options?: CheckOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.uncheck(options);
}

/**
 * Selects an option in a dropdown by its value.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {string} value - The value of the option to select.
 * @param {SelectOptions} options - The select options.
 */
export async function selectByValue(input: string | Locator, value: string, options?: SelectOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption({ value: value }, options);
}

/**
 * Selects options in a dropdown by their values (multi select).
 * @param {string | Locator} input - The dropdown to select options in.
 * @param {Array<string>} value - The values of the options to select.
 * @param {SelectOptions} options - The select options.
 */
export async function selectByValues(
  input: string | Locator,
  value: Array<string>,
  options?: SelectOptions,
): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption(value, options);
}

/**
 * Selects an option in a dropdown by its text.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {string} text - The text of the option to select.
 * @param {SelectOptions} options - The select options.
 */
export async function selectByText(input: string | Locator, text: string, options?: SelectOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption({ label: text }, options);
}

/**
 * Selects an option in a dropdown by its index.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {number} index - The index of the option to select.
 * @param {SelectOptions} options - The select options.
 */
export async function selectByIndex(input: string | Locator, index: number, options?: SelectOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption({ index: index }, options);
}

/**
 * 3. Alerts: This section contains functions for handling alert dialogs.
 * These functions include accepting and dismissing alerts, and getting the text of an alert.
 * Note: These functions currently have some repetition and could be optimized by applying the DRY (Don't Repeat Yourself) principle.
 */

/**
 * Accepts an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @param {string} promptText - The text to enter into a prompt dialog.
 * @returns {Promise<string>} - The message of the dialog.
 */
export async function acceptAlert(input: string | Locator, promptText?: string): Promise<string> {
  const locator = getLocator(input);
  let dialogMessage = '';
  getPage().once('dialog', dialog => {
    dialogMessage = dialog.message();
    dialog.accept(promptText).catch(e => console.error('Error accepting dialog:', e));
  });
  await locator.click();
  // temporary fix to alerts - Need to be fixed
  // await getPage().waitForEvent('dialog');
  return dialogMessage;
}

/**
 * Dismisses an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @returns {Promise<string>} - The message of the dialog.
 */
export async function dismissAlert(input: string | Locator): Promise<string> {
  const locator = getLocator(input);
  let dialogMessage = '';
  getPage().once('dialog', dialog => {
    dialogMessage = dialog.message();
    dialog.dismiss().catch(e => console.error('Error dismissing dialog:', e));
  });
  await locator.click({ noWaitAfter: true });
  // temporary fix for alerts - Need to be fixed
  // await getPage().waitForEvent('dialog');
  return dialogMessage;
}

/**
 * Gets the text of an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @returns {Promise<string>} - The message of the dialog.
 */
export async function getAlertText(input: string | Locator): Promise<string> {
  const locator = getLocator(input);
  let dialogMessage = '';
  const dialogHandler = (dialog: Dialog) => {
    dialogMessage = dialog.message();
  };
  getPage().once('dialog', dialogHandler);
  await locator.click();
  await getPage().waitForEvent('dialog');
  getPage().off('dialog', dialogHandler);
  return dialogMessage;
}

/**
 * Hovers over a specified element.
 * @param {string | Locator} input - The element to hover over.
 * @param {HoverOptions} options - The hover options.
 */
export async function hover(input: string | Locator, options?: HoverOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.hover(options);
}

/**
 * Focuses on a specified element.
 * @param {string | Locator} input - The element to focus on.
 * @param {TimeoutOption} options - The timeout options.
 */
export async function focus(input: string | Locator, options?: TimeoutOption): Promise<void> {
  const locator = getLocator(input);
  await locator.focus(options);
}

/**
 * Drags and drops a specified element to a destination.
 * @param {string | Locator} input - The element to drag.
 * @param {string | Locator} dest - The destination to drop the element at.
 * @param {DragOptions} options - The drag options.
 */
export async function dragAndDrop(
  input: string | Locator,
  dest: string | Locator,
  options?: DragOptions,
): Promise<void> {
  const drag = getLocator(input);
  const drop = getLocator(dest);
  await drag.dragTo(drop, options);
}

/**
 * Double clicks on a specified element.
 * @param {string | Locator} input - The element to double click on.
 * @param {DoubleClickOptions} options - The double click options.
 */
export async function doubleClick(input: string | Locator, options?: DoubleClickOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.dblclick(options);
}

/**
 * Downloads a file from a specified element.
 * @param {string | Locator} input - The element to download the file from.
 * @param {string} path - The path to save the downloaded file to.
 */
export async function downloadFile(input: string | Locator, path: string): Promise<void> {
  const locator = getLocator(input);
  const downloadPromise = getPage().waitForEvent('download');
  await click(locator);
  const download = await downloadPromise;
  // Wait for the download process to complete
  console.log(await download.path());
  // Save downloaded file somewhere
  await download.saveAs(path);
}

/**
 * Uploads files to a specified element.
 * @param {string | Locator} input - The element to upload files to.
 * @param {UploadValues} path - The files to upload.
 * @param {UploadOptions} options - The upload options.
 */
export async function uploadFiles(input: string | Locator, path: UploadValues, options?: UploadOptions): Promise<void> {
  const locator = getLocator(input);
  await locator.setInputFiles(path, options);
}

/**
 * Scrolls a specified element into view.
 * @param {string | Locator} input - The element to scroll into view.
 * @param {TimeoutOption} options - The timeout options.
 */
export async function scrollLocatorIntoView(input: string | Locator, options?: TimeoutOption): Promise<void> {
  const locator = getLocator(input);
  await locator.scrollIntoViewIfNeeded(options);
}

/**
 * 4. JS: This section contains functions that use JavaScript to interact with elements on a web page.
 * These functions include clicking on an element using JavaScript.
 */

/**
 * Clicks on a specified element using JavaScript.
 * @param {string | Locator} input - The element to click on.
 * @param {TimeoutOption} options - The timeout options.
 */
export async function clickByJS(input: string | Locator, options?: TimeoutOption): Promise<void> {
  const locator = getLocator(input);
  await locator.evaluate('el => el.click()', options);
}
