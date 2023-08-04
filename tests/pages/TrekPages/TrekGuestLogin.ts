import { clickAndNavigate, fill } from '@ActionUtils';
import { getLocatorByRole } from '@LocatorUtils';

export async function enterGuestEmail(email: string) {
  await fill(`#email`, email);
}

export async function navigateToCheckoutAsGuest() {
  await clickAndNavigate(
    getLocatorByRole('button', { name: 'Checkout as guest' }),
  );
}
