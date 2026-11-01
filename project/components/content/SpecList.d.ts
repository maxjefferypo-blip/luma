import * as React from 'react';

export interface SpecItem {
  label: string;
  value: React.ReactNode;
  /** Qualifier shown small beneath, e.g. "Measured on a test sample". */
  note?: string;
}

/** Product specifications as hairline rows, or as large display figures. */
export interface SpecListProps {
  items: SpecItem[];
  /** rows = label/value table · figures = big numbers in Geist, max 4 */
  layout?: 'rows' | 'figures';
  inverse?: boolean;
  style?: React.CSSProperties;
}

export declare function SpecList(props: SpecListProps): JSX.Element;
