import { expectElementToBeVisible } from '@AssertUtils';

export async function verifyPostInRacingPage() {
  await expectElementToBeVisible(`//*[@class='posts-wrapper']`);
}
