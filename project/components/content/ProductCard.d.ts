import * as React from 'react';

/**
 * Product tile for collection grids and cross-sells: 4:5 image, name, descriptor, price.
 */
export interface ProductCardProps {
  name: string;
  descriptor?: string;
  /** Pre-formatted, e.g. "£39". */
  price?: string;
  tag?: string;
  image?: string;
  /** Placeholder art-direction note when `image` is absent. */
  imageCaption?: string;
  tone?: 'stone' | 'mist' | 'bone' | 'peach' | 'charcoal';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function ProductCard(props: ProductCardProps): JSX.Element;
