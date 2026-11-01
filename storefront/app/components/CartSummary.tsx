import type {CartApiQueryFragment} from 'storefrontapi.generated';
import type {CartLayout} from '~/components/CartMain';
import {CartForm, type OptimisticCart} from '@shopify/hydrogen';
import {Button} from '~/components/luma/Button';
import {formatMoney} from '~/lib/luma';

type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  layout: CartLayout;
};

/** Subtotal, any applied discount (e.g. from a /discount/CODE link) and Shopify checkout. */
export function CartSummary({cart}: CartSummaryProps) {
  const hasItems = (cart?.totalQuantity ?? 0) > 0;
  const codes = cart?.discountCodes?.filter((d) => d.applicable).map((d) => d.code) ?? [];
  const checkoutUrl = cart?.checkoutUrl;

  return (
    <div className="l-bag-summary" aria-label="Bag summary">
      {codes.length > 0 && (
        <div className="l-bag-row">
          <span className="luma-body">Discount · {codes.join(', ')}</span>
          <CartForm route="/cart" action={CartForm.ACTIONS.DiscountCodesUpdate} inputs={{discountCodes: []}}>
            <button type="submit" className="l-text-btn">
              Remove
            </button>
          </CartForm>
        </div>
      )}
      <div className="l-bag-row">
        <span className="luma-body">Subtotal</span>
        <span style={{font: 'var(--text-body)'}}>
          {hasItems && cart?.cost?.subtotalAmount ? formatMoney(cart.cost.subtotalAmount) : '—'}
        </span>
      </div>
      {/* Checkout is Shopify's hosted checkout; the cart's checkoutUrl carries the cart. */}
      <Button variant="dark" fullWidth caps={false} href={hasItems && checkoutUrl ? checkoutUrl : undefined} disabled={!hasItems || !checkoutUrl}>
        Checkout
      </Button>
      <span className="luma-caption" style={{textAlign: 'center'}}>
        Shipping calculated at checkout.
      </span>
    </div>
  );
}
