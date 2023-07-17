import {  expectElementToHaveAttribute } from "@AssertUtils";
import { getLocatorInFrame } from "@TestUtils";

export async function verifyStoreFinderSearchLocationIsAutofilled() {
    const serachLocation = getLocatorInFrame(`#lcly-embedded-iframe-inner-0`, `//*[@aria-label='Search Location']`);
    // await expectElementToBeVisible(serachLocation);
    // await expectElementToBeEditable(serachLocation);
    await expectElementToHaveAttribute(serachLocation, 'placeholder', 'Ixonia, Wisconsin US');
}