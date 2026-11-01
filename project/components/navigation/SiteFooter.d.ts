import * as React from 'react';

export interface FooterColumn { title: string; links: string[]; }

/** Charcoal site footer: reversed wordmark, newsletter field, three link columns, claims disclaimer. */
export interface SiteFooterProps {
  columns?: FooterColumn[];
  /** Legal line. Keep the "not a medical device" wording on every surface that shows test figures. */
  disclaimer?: string;
  /** Single-column mobile layout. */
  compact?: boolean;
  /** Large display-type mission line under the logo, e.g. "Rethink what’s between you and your screen." */
  statement?: string;
  /** Full-width reversed wordmark as a closing signature at the very bottom. */
  signature?: boolean;
  style?: React.CSSProperties;
}

export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
