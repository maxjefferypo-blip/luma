import {useOptimisticCart} from '@shopify/hydrogen';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {CartLineItem, type CartLine} from '~/components/CartLineItem';
import {CartSummary} from './CartSummary';
import {Button} from '~/components/luma/Button';

export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
  /** Where "Explore LC–01" points when the bag is empty. */
  shopPath: string;
};

export type LineItemChildrenMap = {[parentId: string]: CartLine[]};
/** Returns a map of all line items and their children (bundles, add-ons). */
function getLineItemChildrenMap(lines: CartLine[]): LineItemChildrenMap {
  const children: LineItemChildrenMap = {};
  for (const line of lines) {
    if ('parentRelationship' in line && line.parentRelationship?.parent) {
      const parentId = line.parentRelationship.parent.id;
      if (!children[parentId]) children[parentId] = [];
      children[parentId].push(line);
    }
    if ('lineComponents' in line) {
      const lineChildren = getLineItemChildrenMap(line.lineComponents);
      for (const [parentId, childIds] of Object.entries(lineChildren)) {
        if (!children[parentId]) children[parentId] = [];
        children[parentId].push(...childIds);
      }
    }
  }
  return children;
}

/** The bag: used by the drawer and the /cart page. */
export function CartMain({layout, cart: originalCart, shopPath}: CartMainProps) {
  // Applies pending cart actions so the bag updates immediately.
  const cart = useOptimisticCart(originalCart);
  const lines = cart?.lines?.nodes ?? [];
  const hasItems = (cart?.totalQuantity ?? 0) > 0;
  const childrenMap = getLineItemChildrenMap(lines);

  return (
    <section className={`l-bag${layout === 'page' ? ' l-bag--page' : ''}`} aria-label={layout === 'page' ? 'Bag' : 'Bag drawer'}>
      {hasItems ? (
        <ul className="l-bag-lines" aria-label="Items in your bag">
          {lines.map((line) => {
            // Child lines render under their parent.
            if ('parentRelationship' in line && line.parentRelationship?.parent) return null;
            return <CartLineItem key={line.id} line={line} layout={layout} childrenMap={childrenMap} />;
          })}
        </ul>
      ) : (
        <CartEmpty layout={layout} shopPath={shopPath} />
      )}
      <CartSummary cart={cart} layout={layout} />
    </section>
  );
}

function CartEmpty({layout, shopPath}: {layout: CartLayout; shopPath: string}) {
  const {close} = useAside();
  return (
    <div className="l-bag-lines" style={{gap: 20, alignItems: 'flex-start'}}>
      <p className="luma-body">Your bag is empty.</p>
      <Button size="sm" variant="outline" caps={false} iconRight="arrow-right" to={shopPath} onClick={layout === 'aside' ? close : undefined}>
        Explore LC–01
      </Button>
    </div>
  );
}
