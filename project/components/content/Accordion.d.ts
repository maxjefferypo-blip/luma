import * as React from 'react';

export interface AccordionItem { title: React.ReactNode; content: React.ReactNode; }

/** Hairline-divided disclosure list for FAQs and installation steps. One open at a time. */
export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount; -1 for none. */
  defaultOpen?: number;
  inverse?: boolean;
  style?: React.CSSProperties;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
