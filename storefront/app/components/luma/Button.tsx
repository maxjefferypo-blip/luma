import type {ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode} from 'react';
import {Link} from 'react-router';
import {Icon, type IconName} from './Icon';

/**
 * Pill button from the Luma design system. One primary (orange) per view;
 * everything else is dark, outline, inverse or ghost.
 * Renders a router <Link> with `to`, an <a> with `href`, otherwise a <button>.
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'primary' | 'dark' | 'outline' | 'inverse' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Uppercase + 0.06em tracking (board style). Default true; false for sentence-case UI buttons. */
  caps?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  /** Internal route. */
  to?: string;
  /** External URL (e.g. Shopify checkout). */
  href?: string;
  prefetch?: 'intent' | 'render' | 'viewport' | 'none';
  onClick?: MouseEventHandler<HTMLElement>;
  style?: CSSProperties;
  children?: ReactNode;
}

export function buttonClass({
  variant = 'primary',
  size = 'md',
  caps = true,
  fullWidth = false,
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'caps' | 'fullWidth' | 'className'>) {
  return [
    'l-btn',
    `l-btn--${variant}`,
    size !== 'md' && `l-btn--${size}`,
    caps && 'l-btn--caps',
    fullWidth && 'l-btn--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  caps = true,
  iconRight,
  iconLeft,
  fullWidth = false,
  disabled = false,
  to,
  href,
  prefetch = 'intent',
  type = 'button',
  onClick,
  className,
  style,
  ...rest
}: ButtonProps) {
  const icon = size === 'sm' ? 16 : 20;
  const cls = buttonClass({variant, size, caps, fullWidth, className});
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={icon} />}
      <span>{children}</span>
      {iconRight && (
        <Icon name={iconRight} size={icon} className={iconRight.startsWith('arrow') ? 'l-btn-arrow' : undefined} />
      )}
    </>
  );
  if (to && !disabled) {
    return (
      <Link to={to} prefetch={prefetch} className={cls} style={style} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href && !disabled) {
    return (
      <a href={href} className={cls} style={style} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      className={cls}
      style={style}
      {...rest}
    >
      {inner}
    </button>
  );
}

export interface TextLinkProps {
  children?: ReactNode;
  to?: string;
  href?: string;
  arrow?: boolean;
  inverse?: boolean;
  size?: 'body' | 'caption';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  style?: CSSProperties;
}

/** Underlined inline link; the hairline darkens on hover and the optional arrow nudges right. */
export function TextLink({children, to, href = '#', arrow = false, inverse = false, size = 'body', onClick, style}: TextLinkProps) {
  const cls = ['l-link', inverse && 'l-link--inverse', size === 'caption' && 'l-link--caption'].filter(Boolean).join(' ');
  const inner = (
    <>
      {children}
      {arrow && <Icon name="arrow-right" size={16} className="l-link-arrow" />}
    </>
  );
  return to ? (
    <Link to={to} prefetch="intent" className={cls} style={style} onClick={onClick}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls} style={style} onClick={onClick}>
      {inner}
    </a>
  );
}
