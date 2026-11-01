import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';
import type {CartLayout, LineItemChildrenMap} from '~/components/CartMain';
import {CartForm, type OptimisticCartLine} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {Link} from 'react-router';
import {useAside} from './Aside';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {Icon} from '~/components/luma/Icon';
import {ProductShot} from '~/components/luma/Kit';
import {IMG, PRODUCT_COPY, formatMoney, sizedImage} from '~/lib/luma';

export type CartLine = OptimisticCartLine<CartApiQueryFragment>;

/** One bag line: thumbnail, name, price, device, quantity stepper and Remove (BagDrawer in the website kit). */
export function CartLineItem({layout, line, childrenMap}: {layout: CartLayout; line: CartLine; childrenMap: LineItemChildrenMap}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const {close} = useAside();
  const lineItemChildren = childrenMap[id];
  const variantLabel = title && title !== 'Default Title' ? title : PRODUCT_COPY.descriptor;

  return (
    <li className="l-bag-line" style={{listStyle: 'none'}}>
      <ProductShot src={image?.url ? sizedImage(image.url, 200) : IMG.front} alt={image?.altText ?? ''} pad="10%" radius="var(--radius-sm)" />
      <div style={{display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0}}>
        <div className="l-bag-row">
          <Link
            to={lineItemUrl}
            prefetch="intent"
            onClick={() => layout === 'aside' && close()}
            style={{font: 'var(--text-body)', color: 'var(--text-primary)', textDecoration: 'none'}}
          >
            {product.title}
          </Link>
          <span style={{font: 'var(--text-body)', whiteSpace: 'nowrap'}}>{formatMoney(line.cost?.totalAmount)}</span>
        </div>
        <span className="luma-caption">{variantLabel}</span>
        <CartLineQuantity line={line} />
      </div>
      {lineItemChildren ? (
        <ul style={{gridColumn: '1 / -1', margin: 0, padding: '0 0 0 104px', display: 'flex', flexDirection: 'column', gap: 16}}>
          {lineItemChildren.map((child) => (
            <CartLineItem key={child.id} line={child} layout={layout} childrenMap={childrenMap} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/** Stepper buttons are cart forms; disabled until the server confirms an optimistic line. */
function CartLineQuantity({line}: {line: CartLine}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity, isOptimistic} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 10}}>
      <div className="l-stepper l-stepper--sm">
        <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
          <button type="submit" className="l-stepper-btn" aria-label="Decrease quantity" disabled={quantity <= 1 || !!isOptimistic}>
            <Icon name="minus" size={16} />
          </button>
        </CartLineUpdateButton>
        <span className="l-stepper-value" aria-live="polite">
          {quantity}
        </span>
        <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
          <button type="submit" className="l-stepper-btn" aria-label="Increase quantity" disabled={!!isOptimistic}>
            <Icon name="plus" size={16} />
          </button>
        </CartLineUpdateButton>
      </div>
      <CartForm fetcherKey={getUpdateKey([lineId])} route="/cart" action={CartForm.ACTIONS.LinesRemove} inputs={{lineIds: [lineId]}}>
        <button type="submit" className="l-text-btn" disabled={!!isOptimistic}>
          Remove
        </button>
      </CartForm>
    </div>
  );
}

function CartLineUpdateButton({children, lines}: {children: React.ReactNode; lines: CartLineUpdateInput[]}) {
  const lineIds = lines.map((line) => line.id);
  return (
    <CartForm fetcherKey={getUpdateKey(lineIds)} route="/cart" action={CartForm.ACTIONS.LinesUpdate} inputs={{lines}}>
      {children}
    </CartForm>
  );
}

/** Same key for update/remove on a line so rapid clicks cancel each other rather than racing. */
function getUpdateKey(lineIds: string[]) {
  return [CartForm.ACTIONS.LinesUpdate, ...lineIds].join('-');
}
