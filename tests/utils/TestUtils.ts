import {
  FrameLocator,
  Locator,
  selectors,
  Response,
  Dialog,
} from "@playwright/test";
import { getPage } from "../setup/PageFactory";
import {
  ClickOptions,
  FillOptions,
  GetByTextOptions,
  GotoOptions,
  LocatorOptions,
  GetByRoleOptions,
  GetByRoleTypes,
  GetByPlaceholderOptions,
  CheckOptions,
  NavigationOptions,
  TypeOptions,
  TimeoutOption,
  HoverOptions,
  ClearOptions,
  SelectOptions,
  UploadOptions,
  UploadValues,
  DragOptions,
  DoubleClickOptions,
  WaitForLoadStateOptions,
} from "@Types";
import { SMALL_TIMEOUT, STANDARD_TIMEOUT } from "@Timeouts";
import { loadState } from "playwright.config";

// Navigations
export async function gotoURL(
  path: string,
  options: GotoOptions = { waitUntil: loadState }
): Promise<null | Response> {
  return await getPage().goto(path, options);
}

// Helper function to wait for a specific page load state
export async function waitForPageLoadState(
  options?: NavigationOptions
): Promise<void> {
  let waitUntil: WaitForLoadStateOptions = loadState;

  if (options?.waitUntil && options.waitUntil !== "commit") {
    waitUntil = options.waitUntil;
  }

  await getPage().waitForLoadState(waitUntil);
}
export async function reloadPage(options?: NavigationOptions): Promise<void> {
  await Promise.all([
    getPage().reload(options),
    getPage().waitForEvent("framenavigated"),
  ]);
  await waitForPageLoadState(options);
}

export async function goBack(options?: NavigationOptions): Promise<void> {
  await Promise.all([
    getPage().goBack(options),
    getPage().waitForEvent("framenavigated"),
  ]);
  await waitForPageLoadState(options);
}

export async function wait(ms: number): Promise<void> {
  // eslint-disable-next-line playwright/no-wait-for-timeout
  await getPage().waitForTimeout(ms);
}

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

// Actions
export async function click(
  input: string | Locator,
  options?: ClickOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.click(options);
}

export async function clickAndNavigate(
  input: string | Locator,
  options?: ClickOptions
): Promise<void> {
  const timeout = options?.timeout || STANDARD_TIMEOUT;
  await Promise.all([
    click(input, options),
    getPage().waitForEvent("framenavigated", { timeout: timeout }),
  ]);
  await getPage().waitForLoadState(options?.loadState || loadState, {
    timeout: timeout,
  });
}

export async function fill(
  input: string | Locator,
  value: string,
  options?: FillOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.fill(value, options);
}

export async function fillAndEnter(
  input: string | Locator,
  value: string,
  options?: FillOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.fill(value, options);
  await locator.press("Enter");
}

export async function type(
  input: string | Locator,
  value: string,
  options?: TypeOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.type(value, options);
}

export async function clear(
  input: string | Locator,
  options?: ClearOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.clear(options);
}

export async function check(
  input: string | Locator,
  options?: CheckOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.check(options);
}

export async function uncheck(
  input: string | Locator,
  options?: CheckOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.uncheck(options);
}

export async function selectByValue(
  input: string | Locator,
  value: string,
  options?: SelectOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption({ value: value }, options);
}

export async function selectByValues(
  input: string | Locator,
  value: Array<string>,
  options?: SelectOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption(value, options);
}

export async function selectByText(
  input: string | Locator,
  text: string,
  options?: SelectOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption({ label: text }, options);
}

export async function selectByIndex(
  input: string | Locator,
  index: number,
  options?: SelectOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.selectOption({ index: index }, options);
}

//todo: Optmize Alert functions with DRY principle
export async function acceptAlert(
  input: string | Locator,
  promptText?: string
): Promise<string> {
  const locator = getLocator(input);
  let dialogMessage = "";
  getPage().once("dialog", (dialog) => {
    dialogMessage = dialog.message();
    dialog
      .accept(promptText)
      .catch((e) => console.error("Error accepting dialog:", e));
  });
  await locator.click();
  // temporary fix to alerts - Need to be fixed
  // await getPage().waitForEvent('dialog');
  return dialogMessage;
}

export async function dismissAlert(input: string | Locator): Promise<string> {
  const locator = getLocator(input);
  let dialogMessage = "";
  getPage().once("dialog", (dialog) => {
    dialogMessage = dialog.message();
    dialog.dismiss().catch((e) => console.error("Error dismissing dialog:", e));
  });
  await locator.click({ noWaitAfter: true });
  // temporary fix for alerts - Need to be fixed
  // await getPage().waitForEvent('dialog');
  return dialogMessage;
}

export async function getAlertText(input: string | Locator): Promise<string> {
  const locator = getLocator(input);
  let dialogMessage = "";
  const dialogHandler = (dialog: Dialog) => {
    dialogMessage = dialog.message();
  };
  getPage().once("dialog", dialogHandler);
  await locator.click();
  await getPage().waitForEvent("dialog");
  getPage().off("dialog", dialogHandler);
  return dialogMessage;
}

export async function hover(
  input: string | Locator,
  options?: HoverOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.hover(options);
}

export async function focus(
  input: string | Locator,
  options?: TimeoutOption
): Promise<void> {
  const locator = getLocator(input);
  await locator.focus(options);
}

export async function dragAndDrop(
  input: string | Locator,
  dest: string | Locator,
  options?: DragOptions
): Promise<void> {
  const drag = getLocator(input);
  const drop = getLocator(dest);
  await drag.dragTo(drop, options);
}

export async function doubleClick(
  input: string | Locator,
  options?: DoubleClickOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.dblclick(options);
}

export async function downloadFile(
  input: string | Locator,
  path: string
): Promise<void> {
  const locator = getLocator(input);
  const downloadPromise = getPage().waitForEvent("download");
  await click(locator);
  const download = await downloadPromise;
  // Wait for the download process to complete
  console.log(await download.path());
  // Save downloaded file somewhere
  await download.saveAs(path);
}

export async function uploadFiles(
  input: string | Locator,
  path: UploadValues,
  options?: UploadOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.setInputFiles(path, options);
}

export async function scrollLocatorIntoView(
  input: string | Locator,
  options?: TimeoutOption
): Promise<void> {
  const locator = getLocator(input);
  await locator.scrollIntoViewIfNeeded(options);
}

//JS
export async function clickByJS(
  input: string | Locator,
  options?: TimeoutOption
): Promise<void> {
  const locator = getLocator(input);
  await locator.evaluate("el => el.click()", options);
}

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
