import { Locator } from '@playwright/test';
import { getPage } from '@PageFactory';
import { NavigationOptions, TimeoutOption } from '@Types';
import { getAllLocators, getLocator } from '@LocatorUtils';
import { INSTANT_TIMEOUT, SMALL_TIMEOUT } from '@TimeoutConstants';
import { waitForPageLoadState } from '@ActionUtils';

// Text
export async function getText(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<string> {
  const locator = getLocator(input);
  return await locator.innerText(options);
}

export async function getAllTexts(
  input: string | Locator,
): Promise<Array<string>> {
  const locator = getLocator(input);
  return await locator.allInnerTexts();
}

export async function getInputValue(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<string> {
  const locator = getLocator(input);
  return await locator.inputValue(options);
}

export async function getAllInputValues(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<Array<string>> {
  const locators = await getAllLocators(input);
  return Promise.all(locators.map(locator => getInputValue(locator, options)));
}

export async function getAttribute(
  input: string | Locator,
  attributeName: string,
  options?: TimeoutOption,
): Promise<null | string> {
  const locator = getLocator(input);
  return await locator.getAttribute(attributeName, options);
}

export async function saveStorageState(path?: string): Promise<void> {
  await getPage().context().storageState({ path: path });
}

export async function getURL(
  options: NavigationOptions = { waitUntil: 'load' },
): Promise<string> {
  try {
    await waitForPageLoadState(options);
    return getPage().url();
  } catch (error) {
    console.log(
      `getURL- ${error instanceof Error ? error.message : String(error)}`,
    );
    return '';
  }
}

export async function getLocatorCount(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<number> {
  const timeoutInMs = options?.timeout || INSTANT_TIMEOUT;
  try {
    if (await isElementAttached(input, { timeout: timeoutInMs })) {
      return (await getAllLocators(input)).length;
    }
  } catch (error) {
    console.log(
      `getLocatorCount- ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
  return 0;
}

//Conditions
export async function isElementAttached(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<boolean> {
  const locator = getLocator(input); // Assuming getLocator returns a Playwright Locator
  const timeoutInMs = options?.timeout || SMALL_TIMEOUT;

  try {
    await locator.waitFor({ state: 'attached', timeout: timeoutInMs });
    return true;
  } catch (error) {
    console.log(
      `isElementAttached- ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
    return false;
  }
}

export async function isElementVisible(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<boolean> {
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
    console.log(
      `isElementVisible- ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
  return false;
}

export async function isElementHidden(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<boolean> {
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
    console.log(
      `isElementHidden- ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
  return false;
}

export async function isElementChecked(
  input: string | Locator,
  options?: TimeoutOption,
): Promise<boolean> {
  try {
    if (await isElementVisible(input, options)) {
      return await getLocator(input).isChecked(options);
    }
  } catch (error) {
    console.log(
      `isElementChecked- ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
  return false;
}
