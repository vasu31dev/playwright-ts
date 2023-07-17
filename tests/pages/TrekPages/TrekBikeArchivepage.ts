import { expectElementToBeVisible } from "@AssertUtils";
import { getLocatorByTestId } from "@TestUtils";


export async function verifyBikeArchiveYearDropDown() {
    await expectElementToBeVisible(getLocatorByTestId(`contact-us-form-topic`));
}
