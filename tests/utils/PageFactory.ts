import { Page } from "@playwright/test";

let page: Page;

/** Returns the current Page */
export function getPage(): Page {
  return page;
}

/** Sets the current Page */
export function setPage(pageInstance: Page) : void{
  page = pageInstance;
}

/**
 * Switch to a different page by its index (1-based)
 * If the desired page isn't immediately available, this function will wait and retry for up to 5 seconds
 * @throws {Error} If the desired page isn't found within 5 seconds
 */
export async function switchPage(winNum: number) : Promise<void>{
  const startTime = Date.now();
  while (page.context().pages().length < winNum && Date.now() - startTime < 5000) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (page.context().pages().length < winNum) {
    throw new Error(`Page number ${winNum} not found after 5 seconds`);
  }
  const pageInstance = page.context().pages()[winNum - 1];
  await pageInstance.waitForLoadState();
  setPage(pageInstance);
}

/** Switch back to the default page (the first one) */
export async function switchToDefaultPage() : Promise<void>{
  const pageInstance = page.context().pages()[0];
  if(pageInstance){
    await pageInstance.bringToFront();
    setPage(pageInstance);
  }
}

export async function closePage(winNum: number ) : Promise<void>{
  if(!winNum){
    await page.close();
    return;
  }
  const noOfWindows = page.context().pages().length;
  const pageInstance = page.context().pages()[winNum - 1];
  await pageInstance.close();
  if(noOfWindows > 1){
    await switchToDefaultPage();
  }
}
