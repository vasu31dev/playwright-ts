import { Expect, Locator, TestInfo, expect } from "@playwright/test";
import { getPage } from "./PageFactory";
import { getLocator } from "./TestUtils";
import { SoftOption, ExpectOptions, ExpectTextOptions } from "./Types";

function getExpectWithSoftOption(options?: SoftOption) : Expect{
  return expect.configure({ soft: options?.soft });
}

function getLocatorAndAssert(input: string | Locator, options?: SoftOption): {locator: Locator, assert: Expect} {
  const locator = getLocator(input);
  const assert = getExpectWithSoftOption(options);
  return {locator, assert};
}

/** Use this to assert all the soft assertions  */
export function assertAllSoftAssertions(testInfo: TestInfo){
  expect(testInfo.errors).toHaveLength(0);
}

/**
 * All expect assertions will dynamically wait until either the expect timeout specified in the
 * playwright.config is reached or the condition becomes true.
 * @param {string | locator} input - Either a string (selector) or a Locator object
 */

//Locator Assertions
/* Check if the given element is not present in DOM, or not visible */
export async function expectElementToBeHidden (
  input: string | Locator,
  options?: ExpectOptions
) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeHidden(options);
}

/* Check if the given element is present in DOM, and visible */
export async function expectElementToBeVisible(
  input: string | Locator,
  options?: ExpectOptions
) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeVisible(options);
}

/* Check if the given element is present in DOM */
export async function expectElementToBeAttached(
  input: string | Locator,
  options?: ExpectOptions
) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeAttached(options);
}

/* Check if the given element is present in DOM and Visible in the view port of the page */
export async function expectElementToBeInViewport(
  input: string | Locator,
  options?: ExpectOptions
) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeInViewport(options);
}

export async function expectElementToBeChecked(input: string | Locator, options?: ExpectOptions) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeChecked(options);
}

export async function expectElementNotToBeChecked(input: string | Locator, options?: ExpectOptions) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).not.toBeChecked(options);
}

export async function expectElementToBeDisabled(input: string | Locator, options?: ExpectOptions) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeDisabled(options);
}

export async function expectElementToBeEnabled(input: string | Locator, options?: ExpectOptions) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeEnabled(options);
}

export async function expectElementToBeEditable(input: string | Locator, options?: ExpectOptions) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeEditable(options);
}

/**
 * Asserts that the element equals the provided string or string array or regular expression.
 * @param {string | locator} input - Either a string (selector) or a Locator object
 * @param {string| string[] | RegExp} text - The string, string array or regular expression to match against the
 *   element's text.
 */
export async function expectElementToHaveText(
  input: string | Locator,
  text: string | RegExp | Array<string | RegExp>,
  options?: ExpectOptions & ExpectTextOptions
): Promise<void> {
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toHaveText(text, options);
}

export async function expectElementNotToHaveText(
  input: string | Locator,
  text: string | RegExp | Array<string | RegExp>,
  options?: ExpectOptions & ExpectTextOptions
) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).not.toHaveText(text, options);
}

export async function expectElementToContainText(
  input: string | Locator,
  text: string | RegExp | Array<string | RegExp>,
  options?: ExpectOptions & ExpectTextOptions
) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toContainText(text, options);
}

export async function expectElementNotToContainText(
  input: string | Locator,
  text: string | RegExp | Array<string | RegExp>,
  options?: ExpectOptions & ExpectTextOptions
): Promise<void> {
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).not.toContainText(text, options);
}

/* Check if the given element points to input text box with given text or Regex */
export async function expectElementToHaveValue(
  input: string | Locator,
  text: string | RegExp,
  options?: ExpectOptions
): Promise<void> {
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toHaveValue(text, options);
}

/* Check if the given element points to multi-select/combobox (i.e. a select with the multiple attribute) and the specified values are selected. */
export async function expectElementToHaveValues(
  input: string | Locator,
  text: Array<string|RegExp>,
  options?: ExpectOptions
): Promise<void> {
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toHaveValues(text, options);
}

/* Check if the given element points to empty editable element or to a DOM node that has no text */
export async function expectElementValueToBeEmpty(
  input: string | Locator,
  options?: ExpectOptions
): Promise<void> {
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toBeEmpty(options);
}

/* Check if the given element points to non-empty editable element or to a DOM node that has text */
export async function expectElementValueNotToBeEmpty(
  input: string | Locator,
  options?: ExpectOptions
): Promise<void> {
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).not.toBeEmpty(options);
}

/**
 * Asserts that an element has an attribute with the given value.
 * @param {string | locator} input - Either a string (selector) or a Locator object
 * @param {string} attribute - The attribute to check for.
 * @param {string} value - The value to match against the attribute.
 */
export async function expectElementToHaveAttribute(
  input: string | Locator,
  attribute: string,
  value: string | RegExp,
  options?: ExpectOptions
) : Promise<void>{
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toHaveAttribute(attribute, value, options);
}

export async function expectElementToHaveCount(
  input: string | Locator,
  count: number,
  options?: ExpectOptions
): Promise<void> {
  const {locator, assert} = getLocatorAndAssert(input, options);
  await assert(locator, options).toHaveCount(count, options);
}

//Page Assertions
/**
 * Asserts that the current page URL matches exactly the provided URL or regular expression.
 * @param {string | RegExp} urlOrRegExp - The URL or regular expression to match against the current page URL.
 */
export async function expectPageToHaveURL(urlOrRegExp: string | RegExp, options?: ExpectOptions) : Promise<void>{
  const assert = getExpectWithSoftOption(options);
  await assert(getPage()).toHaveURL(urlOrRegExp, options);
}

/**
 * Asserts that the current page URL contains the provided URL.
 * @param {string } url - The URL to match against the current page URL.
 */
export async function expectPageToContainURL(url: string, options?: ExpectOptions) : Promise<void>{
  const assert = getExpectWithSoftOption(options);
  await assert(getPage()).toHaveURL(new RegExp(url), options);
}

/**
 * This method will be used for future stories validations Asserts that the current page Title
 * matches exactly the provided title or regular expression.
 */
export async function expectPageToHaveTitle(titleOrRegExp: string | RegExp, options?: ExpectOptions) : Promise<void>{
  const assert = getExpectWithSoftOption(options);
  await assert(getPage()).toHaveTitle(titleOrRegExp, options);
}

