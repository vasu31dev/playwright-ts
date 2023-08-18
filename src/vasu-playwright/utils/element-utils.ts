/**
 * element-utils.ts: This module provides utility functions for retrieving text from web elements in web page and conditional statements with in Playwright.
 * These utilities include a variety of functions for retrieving text, input values, URLs, and checking conditions such as
 * whether an element is visible or checked. It provides a layer of abstraction over Playwright's built-in methods for
 * interacting with elements, making it easier to perform common tasks and checks on web elements.
 */

import { Locator } from '@playwright/test';
import { getPage } from './page-utils';
import { NavigationOptions, TimeoutOption } from '../setup/optional-parameter-types';
import { getAllLocators, getLocator } from './locator-utils';
import { INSTANT_TIMEOUT, SMALL_TIMEOUT } from './timeout-constants';
import { waitForPageLoadState } from './action-utils';

/**
 * 1. Retreiving Data: Use these functions to retrieve text, values, and counts from web elements.
 * These functions can also be used in conditional statements to check the state of web elements.
 * These functions are not intended for use in assertions, unless the built-in Playwright assertions do not meet your criteria.
 */

/**
 * Returns the inner text of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<string>} - The inner text of the Locator.
 */
export async function getText(input: string | Locator, options?: TimeoutOption): Promise<string> {
  const locator = getLocator(input);
  return await locator.innerText(options);
}

/**
 * Returns the inner text of all Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @returns {Promise<Array<string>>} - The inner text of all Locator objects.
 */
export async function getAllTexts(input: string | Locator): Promise<Array<string>> {
  const locator = getLocator(input);
  return await locator.allInnerTexts();
}

/**
 * Returns the input value of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<string>} - The input value of the Locator.
 */
export async function getInputValue(input: string | Locator, options?: TimeoutOption): Promise<string> {
  const locator = getLocator(input);
  return await locator.inputValue(options);
}

/**
 * Returns the input values of all Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<Array<string>>} - The input values of all Locator objects.
 */
export async function getAllInputValues(input: string | Locator, options?: TimeoutOption): Promise<Array<string>> {
  const locators = await getAllLocators(input);
  return Promise.all(locators.map(locator => getInputValue(locator, options)));
}

/**
 * Returns the attribute of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {string} attributeName - The name of the attribute to get.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<null | string>} - The attribute of the Locator if present or null if absent.
 */
export async function getAttribute(
  input: string | Locator,
  attributeName: string,
  options?: TimeoutOption,
): Promise<null | string> {
  const locator = getLocator(input);
  return await locator.getAttribute(attributeName, options);
}

/**
 * Saves the storage state of the page.
 * @param {string} [path] - Optional path to save the storage state to.
 * @returns {Promise<void>}
 */
export async function saveStorageState(path?: string): Promise<void> {
  await getPage().context().storageState({ path: path });
}

/**
 * Returns the URL of the page.
 * @param {NavigationOptions} [options] - Optional navigation options.
 * @returns {Promise<string>} - The URL of the page.
 */
export async function getURL(options: NavigationOptions = { waitUntil: 'load' }): Promise<string> {
  try {
    await waitForPageLoadState(options);
    return getPage().url();
  } catch (error) {
    console.log(`getURL- ${error instanceof Error ? error.message : String(error)}`);
    return '';
  }
}

/**
 * Returns the count of Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<number>} - The count of the Locator objects.
 */
export async function getLocatorCount(input: string | Locator, options?: TimeoutOption): Promise<number> {
  const timeoutInMs = options?.timeout || INSTANT_TIMEOUT;
  try {
    if (await isElementAttached(input, { timeout: timeoutInMs })) {
      return (await getAllLocators(input)).length;
    }
  } catch (error) {
    console.log(`getLocatorCount- ${error instanceof Error ? error.message : String(error)}`);
  }
  return 0;
}

/**
 * 2. Conditions: Use these checks within conditional statements.
 * They are not intended for use in assertions, unless the built-in Playwright assertions do not meet your criteria.
 */

/**
 * Checks if a Locator object is attached to DOM.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is attached, false otherwise.
 */
export async function isElementAttached(input: string | Locator, options?: TimeoutOption): Promise<boolean> {
  const locator = getLocator(input); // Assuming getLocator returns a Playwright Locator
  const timeoutInMs = options?.timeout || SMALL_TIMEOUT;

  try {
    await locator.waitFor({ state: 'attached', timeout: timeoutInMs });
    return true;
  } catch (error) {
    console.log(`isElementAttached- ${error instanceof Error ? error.message : String(error)}`);
    return false;
  }
}

/**
 * Checks if a Locator object is attached to DOM and is visible.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is visible, false otherwise.
 */
export async function isElementVisible(input: string | Locator, options?: TimeoutOption): Promise<boolean> {
  const locator = getLocator(input);
  const timeoutInMs = options?.timeout || SMALL_TIMEOUT;
  const startTime = Date.now();
  try {
    while (Date.now() - startTime < timeoutInMs) {
      if (await locator.isVisible(options)) {
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  } catch (error) {
    console.log(`isElementVisible- ${error instanceof Error ? error.message : String(error)}`);
  }
  return false;
}

/**
 * Checks if a Locator object is hidden or not present in DOM.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is hidden, false otherwise.
 */
export async function isElementHidden(input: string | Locator, options?: TimeoutOption): Promise<boolean> {
  const locator = getLocator(input);
  const timeoutInMs = options?.timeout || SMALL_TIMEOUT;
  const startTime = Date.now();
  try {
    while (Date.now() - startTime < timeoutInMs) {
      if (await locator.isHidden(options)) {
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  } catch (error) {
    console.log(`isElementHidden- ${error instanceof Error ? error.message : String(error)}`);
  }
  return false;
}

/**
 * Checks if a Locator object is checked.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is checked, false otherwise.
 */
export async function isElementChecked(input: string | Locator, options?: TimeoutOption): Promise<boolean> {
  try {
    if (await isElementVisible(input, options)) {
      return await getLocator(input).isChecked(options);
    }
  } catch (error) {
    console.log(`isElementChecked- ${error instanceof Error ? error.message : String(error)}`);
  }
  return false;
}
