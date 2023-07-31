import { Locator } from "@playwright/test";
import { getPage } from "@PageFactory";
import {
  TimeoutOption,
} from "@Types";
import { getAllLocators, getLocator } from "@LocatorUtils";
import { SMALL_TIMEOUT } from "@Timeouts";

// Text
export async function getText(
  input: string | Locator,
  options?: TimeoutOption
): Promise<string> {
  const locator = getLocator(input);
  return await locator.innerText(options);
}

export async function getAllTexts(
  input: string | Locator
): Promise<Array<string>> {
  const locator = getLocator(input);
  return await locator.allInnerTexts();
}

export async function getInputValue(
  input: string | Locator,
  options?: TimeoutOption
): Promise<string> {
  const locator = getLocator(input);
  return await locator.inputValue(options);
}

export async function getAllInputValues(
  input: string | Locator,
  options?: TimeoutOption
): Promise<Array<string>> {
  const locators = await getAllLocators(input);
  return Promise.all(
    locators.map((locator) => getInputValue(locator, options))
  );
}

export async function getAttribute(
  input: string | Locator,
  attributeName: string,
  options?: TimeoutOption
): Promise<null | string> {
  const locator = getLocator(input);
  return await locator.getAttribute(attributeName, options);
}

export async function saveStorageState(path?: string): Promise<void> {
  await getPage().context().storageState({ path: path });
}

//Conditions
export async function isElementVisible(
  input: string | Locator,
  options?: TimeoutOption
): Promise<boolean> {
  const locator = getLocator(input);
  const timeInMs = options?.timeout || SMALL_TIMEOUT;
  const startTime = Date.now();
  try {
    while (
      !(await locator.isVisible(options)) &&
      Date.now() - startTime < timeInMs
    ) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  } catch (error) {
    console.log(
      `isElementVisible1- ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return false;
  }
  try {
    return await locator.isVisible();
  } catch (error) {
    console.log(
      `isElementVisible2- ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return false;
  }
}
