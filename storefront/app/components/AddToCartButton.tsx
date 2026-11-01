import {type FetcherWithComponents} from 'react-router';
import {CartForm, type OptimisticCartLineInput} from '@shopify/hydrogen';
import {Button, type ButtonProps} from '~/components/luma/Button';

/**
 * Luma Button that adds lines to the Shopify cart. Pass `selectedVariant` on each line so the
 * bag updates optimistically before the Storefront API responds.
 */
export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
  ...button
}: {
  analytics?: unknown;
  children: React.ReactNode;
  disabled?: boolean;
  lines: Array<OptimisticCartLineInput>;
  onClick?: () => void;
} & Pick<ButtonProps, 'variant' | 'size' | 'caps' | 'fullWidth' | 'iconRight' | 'style'>) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher: FetcherWithComponents<any>) => (
        <>
          <input name="analytics" type="hidden" value={JSON.stringify(analytics)} />
          <Button type="submit" onClick={onClick} disabled={disabled || fetcher.state !== 'idle'} {...button}>
            {children}
          </Button>
        </>
      )}
    </CartForm>
  );
}
