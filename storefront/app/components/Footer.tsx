import {useId} from 'react';
import {Link, useFetcher} from 'react-router';
import {Logo} from '~/components/luma/Brand';
import {Button} from '~/components/luma/Button';
import {productPath} from '~/lib/luma';
import type {action as newsletterAction} from '~/routes/newsletter';

const DISCLAIMER =
  'Luma LC–01 is a screen protector, not a medical device. Test figures describe a measured sample and are not health claims.';

function columns(productHandle: string) {
  const shop = productPath(productHandle);
  return [
    {title: 'Shop', links: [{label: 'LC–01', to: shop}, {label: 'Your bag', to: '/cart'}, {label: 'Account', to: '/account'}]},
    {title: 'Learn', links: [{label: 'The science', to: '/science'}, {label: 'Test results', to: '/science#results'}, {label: 'Installation', to: `${shop}#details`}]},
    {title: 'Help', links: [{label: 'Shipping', to: '/policies/shipping-policy'}, {label: 'Returns', to: '/policies/refund-policy'}, {label: 'Contact', to: '/pages/contact'}]},
  ];
}

/** Luma SiteFooter with the brand statement, newsletter sign-up, link columns and full-width wordmark. */
export function Footer({productHandle}: {productHandle: string}) {
  return (
    <footer className="l-footer">
      <div className="l-footer-grid">
        <div style={{display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 520}}>
          <Logo variant="reversed" height={36} />
          <p style={{font: 'var(--text-h2)', letterSpacing: 'var(--type-h2-track)', color: 'var(--text-inverse)', margin: '8px 0 16px'}}>
            Rethink what’s between you and your screen.
          </p>
          <p style={{font: 'var(--text-body)', color: 'var(--text-inverse-secondary)'}}>
            Notes on light, screens and the science behind LC–01. Occasional, never noisy.
          </p>
          <NewsletterForm />
        </div>
        {columns(productHandle).map((c) => (
          <nav key={c.title} className="l-footer-col" aria-label={c.title}>
            <span style={{font: 'var(--text-overline)', letterSpacing: 'var(--type-overline-track)', textTransform: 'uppercase', color: 'var(--text-inverse)', marginBottom: 4}}>
              {c.title}
            </span>
            {c.links.map((l) => (
              <Link key={l.label} to={l.to} prefetch="intent">
                {l.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="l-footer-base">
        <span style={{font: '12px/18px var(--font-body)', color: 'var(--text-inverse-secondary)', maxWidth: 560}}>{DISCLAIMER}</span>
        <span style={{font: '12px/18px var(--font-body)', color: 'var(--text-inverse-secondary)', whiteSpace: 'nowrap'}}>© Luma</span>
      </div>
      <div className="l-footer-sign">
        <Logo variant="reversed" style={{width: '100%', height: 'auto'}} aria-hidden title="" />
      </div>
    </footer>
  );
}

/** Inverse Input + "Join" from the design system, posting to /newsletter. */
function NewsletterForm() {
  const fetcher = useFetcher<typeof newsletterAction>();
  const id = useId();
  const busy = fetcher.state !== 'idle';
  const result = fetcher.data;
  const error = result && !result.ok ? result.message : undefined;
  return (
    <fetcher.Form method="post" action="/newsletter" style={{display: 'flex', flexDirection: 'column', gap: 8}}>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div
        style={{
          display: 'flex', alignItems: 'center', height: 52, borderRadius: 'var(--radius-sm)', gap: 8, padding: '0 4px 0 16px',
          border: `1px solid ${error ? 'var(--luma-peach)' : 'rgba(245,241,234,.28)'}`,
        }}
      >
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          aria-invalid={!!error || undefined}
          style={{flex: 1, minWidth: 0, height: '100%', border: 0, outline: 'none', background: 'transparent', color: 'var(--text-inverse)', font: 'var(--text-body)', padding: 0}}
        />
        <Button type="submit" size="sm" variant="inverse" disabled={busy}>
          Join
        </Button>
      </div>
      {result && (
        <span role="status" style={{font: 'var(--text-caption)', color: result.ok ? 'var(--text-inverse)' : 'var(--luma-peach)'}}>
          {result.message}
        </span>
      )}
    </fetcher.Form>
  );
}
