import { click, gotoURL } from '@ActionUtils';
import { expectPageToHaveURL } from '@AssertUtils';
import { getLocatorByText } from '@LocatorUtils';

const aboutLink = () => getLocatorByText('About', { exact: true }).nth(0);
const anacondaLink = () => getLocatorByText('Anaconda', { exact: true });
const signInLink = () => getLocatorByText('Sign In', { exact: true });

export async function navigateToAnacondaHomepage() {
  await gotoURL('https://www.anaconda.org/');
}

export async function verifyAnacondaHomePageURL() {
  await expectPageToHaveURL('https://anaconda.org/');
}

export async function clickAboutNavLink() {
  await click(aboutLink());
}

export async function verifyAboutPageURL() {
  await expectPageToHaveURL(new RegExp('anaconda.com/about-us'));
}

export async function clickAnacondaNavLink() {
  await click(anacondaLink());
}

export async function verifyAnacondaPageURL() {
  await expectPageToHaveURL(new RegExp('anaconda.com/pricing/organizations'));
}

export async function clickSignInNavLink() {
  await click(signInLink());
}

export async function verifySignInPageURL() {
  await expectPageToHaveURL(new RegExp('anaconda.org/account/login'));
}
