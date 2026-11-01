import {Await, Link} from 'react-router';
import {Suspense} from 'react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {Aside, useAside} from '~/components/Aside';
import {Footer} from '~/components/Footer';
import {AnnouncementBar, Header, navLinks} from '~/components/Header';
import {CartMain} from '~/components/CartMain';
import {Button} from '~/components/luma/Button';
import {productPath} from '~/lib/luma';

interface PageLayoutProps {
  cart: Promise<CartApiQueryFragment | null>;
  productHandle: string;
  children?: React.ReactNode;
}

/** Announcement bar → sticky header → page → footer, plus the bag and mobile-menu drawers. */
export function PageLayout({cart, children = null, productHandle}: PageLayoutProps) {
  return (
    <Aside.Provider>
      <CartAside cart={cart} productHandle={productHandle} />
      <MobileMenuAside productHandle={productHandle} />
      <AnnouncementBar productHandle={productHandle} />
      <Header cart={cart} productHandle={productHandle} />
      <main>{children}</main>
      <Footer productHandle={productHandle} />
    </Aside.Provider>
  );
}

function CartAside({cart, productHandle}: {cart: PageLayoutProps['cart']; productHandle: string}) {
  return (
    <Aside type="cart" heading="Bag">
      <Suspense fallback={<p className="luma-body" style={{padding: 24}}>Loading your bag…</p>}>
        <Await resolve={cart}>{(cart) => <CartMain cart={cart} layout="aside" shopPath={productPath(productHandle)} />}</Await>
      </Suspense>
    </Aside>
  );
}

function MobileMenuAside({productHandle}: {productHandle: string}) {
  const {close} = useAside();
  return (
    <Aside type="mobile" heading="Menu">
      <nav className="l-menu" aria-label="Mobile">
        <Link to="/" prefetch="intent" className="l-menu-link" onClick={close}>
          Home
        </Link>
        {navLinks(productHandle).map((l) => (
          <Link key={l.label} to={l.to} prefetch="intent" className="l-menu-link" onClick={close}>
            {l.label}
          </Link>
        ))}
        <Link to="/account" prefetch="intent" className="l-menu-link" onClick={close}>
          Account
        </Link>
        <div style={{marginTop: 24}}>
          <Button fullWidth iconRight="arrow-right" to={productPath(productHandle)} onClick={close}>
            Shop LC–01
          </Button>
        </div>
      </nav>
    </Aside>
  );
}
