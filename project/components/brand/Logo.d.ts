import * as React from 'react';

/**
 * The luma wordmark with eclipse. Vector master — never re-set in a font.
 * Keep clear space of one x-height (≈ 0.67 × height) on all sides. Minimum height 24px.
 */
export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  /** primary = charcoal on light · reversed = white on dark · wordmark = charcoal, no eclipse (one-colour uses) */
  variant?: 'primary' | 'reversed' | 'wordmark';
  /** Rendered height in px (width follows). Default 32. */
  height?: number;
  /** Accessible name. Default "luma". */
  title?: string;
}

export declare const WORDMARK_PATH: string;
export declare const ECLIPSE: { r: number; front: [number, number]; back: [number, number] };
export declare function Logo(props: LogoProps): JSX.Element;
