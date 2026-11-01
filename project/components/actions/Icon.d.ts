import * as React from 'react';

export type IconName =
  | 'arrow-right' | 'arrow-up-right' | 'arrow-left' | 'plus' | 'minus' | 'x' | 'check'
  | 'chevron-down' | 'chevron-right' | 'shopping-bag' | 'menu' | 'user' | 'search'
  | 'package' | 'rotate-ccw' | 'info';

/** Line icon from the Luma set (Lucide glyphs at 1.5px stroke). Inherits currentColor. */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  /** px. 20 default; 16 inline with captions, 24 in headers. */
  size?: number;
  strokeWidth?: number;
  color?: string;
  /** Accessible label; omit for decorative icons. */
  title?: string;
}

export declare const ICON_NAMES: IconName[];
export declare function Icon(props: IconProps): JSX.Element | null;
