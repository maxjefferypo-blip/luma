import * as React from 'react';

export interface TabItem { id?: string; label: string; }

/** Underline tabs on a hairline — product detail sections (Overview · Specifications · Installation). */
export interface TabsProps {
  tabs: TabItem[];
  /** Active tab id (or label when no id). */
  value?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
