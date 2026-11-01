import * as React from 'react';

export interface NavItem { id?: string; label: string; href?: string; }

/**
 * Website header: wordmark, primary nav (Science · Shop · Technology), account and bag.
 * 72px tall, hairline bottom border. `compact` collapses to the mobile layout.
 * @startingPoint section="Navigation" subtitle="Site header — wordmark, nav, bag" viewport="1280x72"
 */
export interface SiteHeaderProps {
  links?: NavItem[];
  /** id/href of the active link. */
  active?: string;
  cartCount?: number;
  onNavigate?: (id: string) => void;
  onCart?: () => void;
  onHome?: () => void;
  /** Charcoal header with reversed logo. */
  inverse?: boolean;
  /** Mobile: 24px logo, bag + menu only. */
  compact?: boolean;
  /** Optional element before the account/bag icons, e.g. a small "Shop LC–01" Button. Hidden when compact. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
