import {data} from 'react-router';
import type {Route} from './+types/newsletter';

/**
 * Footer newsletter sign-up.
 *
 * Creates a Shopify customer with email-marketing consent through the Storefront API, which puts the
 * address in Shopify's own subscriber list (Customers › Email subscribed). The random password is never
 * shown or used; the customer can set one later via "Forgot password".
 *
 * If you move email to Klaviyo or Shopify Forms, replace the body of this action with that provider's API.
 */
export async function action({request, context}: Route.ActionArgs) {
  const form = await request.formData();
  const email = String(form.get('email') ?? '').trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return data({ok: false, message: 'Enter a valid email address.'}, {status: 400});
  }

  try {
    const {customerCreate} = await context.storefront.mutate(NEWSLETTER_MUTATION, {
      variables: {input: {email, acceptsMarketing: true, password: randomPassword()}},
    });
    const errors = customerCreate?.customerUserErrors ?? [];
    // TAKEN = the address already has a customer record; treat as signed up rather than revealing it.
    const failed = errors.filter((e) => e.code !== 'TAKEN');
    if (failed.length) {
      return data({ok: false, message: failed[0].code === 'INVALID' ? 'Enter a valid email address.' : 'We couldn’t sign you up just now. Try again later.'}, {status: 400});
    }
    return {ok: true, message: 'Thanks. We’ll be in touch.'};
  } catch (error) {
    console.error(error);
    return data({ok: false, message: 'We couldn’t sign you up just now. Try again later.'}, {status: 500});
  }
}

function randomPassword() {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  return btoa(String.fromCharCode(...bytes));
}

const NEWSLETTER_MUTATION = `#graphql
  mutation NewsletterSignup(
    $input: CustomerCreateInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
` as const;
