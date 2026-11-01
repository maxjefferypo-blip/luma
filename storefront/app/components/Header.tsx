import {Suspense} from 'react';
import {Await, Link, useAsyncValue, useLocation} from 'react-router';
import {type CartViewPayload, useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {Logo} from '~/components/luma/Brand';
import {Button} from '~/components/luma/Button';
import {Icon} from '~/components/luma/Icon';
import {Marquee} from '~/components/luma/Kit';
import {productPath} from '~/lib/luma';

interface HeaderProps {
  cart: Promise<CartApiQueryFragment | null>;
  productHandle: string;
}

export function navLinks(productHandle: string) {
  return [
    {label: 'Science', to: '/science'},
    {label: 'Shop', to: productPath(productHandle)},
    {label: 'Technology', to: '/science#technology', anchor: true},
  ];
}

/** Peach scrolling bar above the header (website kit). Links to the product. */
export function AnnouncementBar({productHandle}: {productHandle: string}) {
  const items = [
    'Made for bedtime scrolling',
    'Converts a portion of blue light into warmer, red light',
    'No glasses, no apps — nothing to switch on',
    'Applicator included in every box',
  ];
  return (
    <Link to={productPath(productHandle)} prefetch="intent" className="k-announce" aria-label="Shop Luma LC–01">
      <Marquee duration={50} gap={64}>
        {items.map((t) => (
          <span key={t} className="k-announce-item">
            {t}
            <Icon name="arrow-right" size={14} />
          </span>
        ))}
      </Marquee>
    </Link>
  );
}

/** Luma SiteHeader: wordmark, Science · Shop · Technology, Shop button, account, bag. Mobile collapses to bag + menu. */
export function Header({cart, productHandle}: HeaderProps) {
  const {open} = useAside();
  const {pathname} = useLocation();
  const shop = productPath(productHandle);
  const onProductPage = pathname.startsWith('/products/');
  return (
    <div className="l-header-wrap">
      <header className="l-header">
        <div className="l-header-left">
          <Link to="/" prefetch="intent" className="l-header-logo" aria-label="Luma home">
            <Logo height={28} />
          </Link>
          <nav className="l-header-nav" aria-label="Main">
            {navLinks(productHandle).map((l) => (
              <Link
                key={l.label}
                to={l.to}
                prefetch="intent"
                className={`l-nav-link${!l.anchor && pathname === l.to ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="l-header-right">
          {!onProductPage && (
            <div className="l-header-action">
              <Button size="sm" variant="dark" caps={false} to={shop}>
                Shop LC–01
              </Button>
            </div>
          )}
          <Link to="/account" prefetch="intent" className="l-icon-btn l-header-account" aria-label="Account">
            <Icon name="user" size={22} />
          </Link>
          <CartToggle cart={cart} />
          <button type="button" className="l-icon-btn l-header-menu" aria-label="Menu" onClick={() => open('mobile')}>
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>
    </div>
  );
}

function CartBadge({count}: {count: number}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();
  return (
    <a
      href="/cart"
      className="l-icon-btn"
      aria-label={`Bag, ${count} ${count === 1 ? 'item' : 'items'}`}
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {cart, prevCart, shop, url: window.location.href || ''} as CartViewPayload);
      }}
    >
      <Icon name="shopping-bag" size={22} />
      {count > 0 && <span className="l-badge">{count}</span>}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}
