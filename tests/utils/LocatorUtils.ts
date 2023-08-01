import {
  FrameLocator,
  Locator,
  selectors,
} from "@playwright/test";
import { getPage } from "@PageFactory";
import {
  GetByTextOptions,
  LocatorOptions,
  GetByRoleOptions,
  GetByRoleTypes,
  GetByPlaceholderOptions,
} from "@Types";

// Locators
export function getLocator(
  input: string | Locator,
  options?: LocatorOptions
): Locator {
  return typeof input === "string" ? getPage().locator(input, options) : input;
}

export function getLocatorByTestId(
  testId: string | RegExp,
  attributeName?: string
): Locator {
  if (attributeName) {
    selectors.setTestIdAttribute(attributeName);
  }
  return getPage().getByTestId(testId);
}

export function getLocatorByText(
  text: string | RegExp,
  options?: GetByTextOptions
): Locator {
  return getPage().getByText(text, options);
}

export function getLocatorByRole(
  role: GetByRoleTypes,
  options?: GetByRoleOptions
): Locator {
  return getPage().getByRole(role, options);
}

export function getLocatorByLabel(
  text: string | RegExp,
  options?: GetByRoleOptions
): Locator {
  return getPage().getByLabel(text, options);
}

export function getLocatorByPlaceholder(
  text: string | RegExp,
  options?: GetByPlaceholderOptions
): Locator {
  return getPage().getByPlaceholder(text, options);
}

export async function getAllLocators(
  input: string | Locator,
  options?: LocatorOptions
): Promise<Locator[]> {
  return typeof input === "string"
    ? await getPage().locator(input, options).all()
    : await input.all();
}

//Frames
export function getFrameLocator(
  frameInput: string | FrameLocator
): FrameLocator {
  return typeof frameInput === "string"
    ? getPage().frameLocator(frameInput)
    : frameInput;
}

export function getLocatorInFrame(
  frameInput: string | FrameLocator,
  input: string | Locator
): Locator {
  return getFrameLocator(frameInput).locator(input);
}
