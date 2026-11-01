import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 40, padding: '0 20px', fontSize: 14, gap: 8, icon: 16 },
  md: { height: 52, padding: '0 28px', fontSize: 16, gap: 12, icon: 20 },
  lg: { height: 60, padding: '0 36px', fontSize: 16, gap: 14, icon: 20 },
};

const VARIANTS = {
  primary: { bg: 'var(--accent)', hover: 'var(--accent-hover)', press: 'var(--accent-press)', fg: 'var(--text-on-accent)', border: 'transparent' },
  dark: { bg: 'var(--luma-charcoal)', hover: 'var(--luma-ink-80)', press: '#000000', fg: 'var(--luma-bone)', border: 'transparent' },
  outline: { bg: 'transparent', hover: 'var(--luma-stone)', press: 'var(--luma-ink-14)', fg: 'var(--text-primary)', border: 'var(--luma-charcoal)' },
  inverse: { bg: 'var(--luma-bone)', hover: 'var(--luma-stone)', press: 'var(--luma-ink-14)', fg: 'var(--luma-charcoal)', border: 'transparent' },
  ghost: { bg: 'transparent', hover: 'rgba(31,35,38,.06)', press: 'rgba(31,35,38,.10)', fg: 'var(--text-primary)', border: 'transparent' },
};

export function Button({
  children, variant = 'primary', size = 'md', caps = true, iconRight, iconLeft,
  fullWidth = false, disabled = false, href, type = 'button', onClick, style, ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const bg = disabled ? v.bg : press ? v.press : hover ? v.hover : v.bg;
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href} type={href ? undefined : type} disabled={href ? undefined : disabled}
      aria-disabled={disabled || undefined} onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, borderRadius: 'var(--radius-pill)',
        background: bg, color: v.fg, border: `1px solid ${v.border}`,
        font: `var(--weight-medium) ${s.fontSize}px/20px var(--font-body)`,
        letterSpacing: caps ? 'var(--type-button-track)' : '0',
        textTransform: caps ? 'uppercase' : 'none', textDecoration: 'none', whiteSpace: 'nowrap',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transition: 'background var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={s.icon}
        style={{ transform: hover && !disabled && iconRight.startsWith('arrow') ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }} />}
    </Tag>
  );
}
