import * as React from 'react';

/** Underlined inline link. Hairline underline darkens to full ink on hover. */
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  /** Trailing arrow for "Read the science →" style links. */
  arrow?: boolean;
  /** Bone text for Charcoal grounds. */
  inverse?: boolean;
  size?: 'body' | 'caption';
  children?: React.ReactNode;
}

export declare function TextLink(props: TextLinkProps): JSX.Element;
