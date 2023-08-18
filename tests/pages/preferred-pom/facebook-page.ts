import { click, clickAndNavigate, gotoURL } from 'utils/action-utils';
import { expectPageToHaveURL } from 'utils/assert-utils';
import { getLocatorByText } from 'utils/locator-utils';

const instagramLink = () => getLocatorByText('Instagram', { exact: true });
const privacyPolicyLink = () => getLocatorByText('Privacy Policy');
const metaQuestLink = () => getLocatorByText('Meta Quest');

export async function navigatetoFacebookHomePage() {
  await gotoURL('https://www.facebook.com/');
}

export async function verifyFacebookPageURL() {
  await expectPageToHaveURL(new RegExp('https://www.facebook.com/'));
}

export async function clickFacebookInstagramFooterLink() {
  await click(instagramLink());
}

export async function verifyInstagaramPageURL() {
  await expectPageToHaveURL(new RegExp('https://www.instagram.com/'));
}

export async function clickFacebookPrivacyPolicyFooterLink() {
  await clickAndNavigate(privacyPolicyLink());
}

export async function verifyPrivacyPolicyPageURL() {
  await expectPageToHaveURL(new RegExp('www.facebook.com/privacy/policy/'));
}

export async function clickFacebookMetaQuestFooterLink() {
  await click(metaQuestLink());
}

export async function verifyMetaQuestpageURL() {
  await expectPageToHaveURL(new RegExp('meta.com/quest/'));
}
