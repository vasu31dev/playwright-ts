import {  STANDARD_TIMEOUT, expectElementToBeVisible, expectElementToHaveAttribute, expectElementToHaveText, expectElementValueNotToBeEmpty } from "@AssertUtils";
import { click, getLocator, getLocatorByTestId, getLocatorInFrame, type, waitForPageLoadState } from "@TestUtils";

const searchLocation = () => getLocatorInFrame(`#lcly-embedded-iframe-inner-0`, `//*[@aria-label='Search Location']`);
const autoSearchSuggestions = () => getLocatorInFrame(`#lcly-embedded-iframe-inner-0`, `//*[@class='google-suggestions']//*[contains(@qaid,'store-locator__search__suggestions__')]`);
const storeResults = () => getLocatorInFrame(`#lcly-embedded-iframe-inner-0`, `//*[@id='conversion-locations']//*[@class='section-title dl-store-name']`).nth(0);

export async function verifyStoreLocatorPageHeader() {
    await expectElementToHaveText(getLocatorByTestId(`store-locator__title`), 'Find a bike shop');
}

export async function verifyStoreFinderSearchLocationIsAutofilled() {
    await expectElementToHaveAttribute(searchLocation(), 'placeholder', 'Ixonia, Wisconsin US', {timeout: STANDARD_TIMEOUT});
    await expectElementValueNotToBeEmpty(searchLocation());
}

export async function typeZipCodeintosearchLocation(zipCode: string) {
    await type(searchLocation(), zipCode);
    // await getPage().pause();
}

export async function verifyAutoSearchResultsDisplayed() {
    await expectElementToBeVisible(autoSearchSuggestions(), {timeout: STANDARD_TIMEOUT});
}

export async function clickAutoSearchResult(resultNumber: number) {
    await click(getLocatorInFrame(`#lcly-embedded-iframe-inner-0`, `//*[@qaid='store-locator__search__suggestions']//li[${resultNumber}]`));
    await waitForPageLoadState();
}

export async function verifyStoreResultsDisplayed() {
    await expectElementToBeVisible(getLocator(storeResults()));
}

