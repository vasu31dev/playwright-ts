import { expectElementToBeVisible } from '@AssertUtils';
import { getLocatorByTestId } from '@LocatorUtils';

export async function verifyBikeArchiveYearDropDown() {
  await expectElementToBeVisible(getLocatorByTestId(`contact-us-form-topic`));
}
