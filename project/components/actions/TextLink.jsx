import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

export function TextLink({ children, href = '#', arrow = false, inverse = false, size = 'body', style, ...rest }) {
  const [hover, setHover] = useState(false);
  const color = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const line = inverse ? 'rgba(245,241,234,.4)' : 'var(--border-strong)';
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, color,
        font: size === 'caption' ? 'var(--text-caption)' : 'var(--text-body)',
        textDecoration: 'underline', textDecorationThickness: 1, textUnderlineOffset: 4,
        textDecorationColor: hover ? 'currentColor' : line,
        transition: 'text-decoration-color var(--dur-fast) var(--ease-out)', ...style,
      }} {...rest}>
      {children}
      {arrow && <Icon name="arrow-right" size={16} style={{ transform: hover ? 'translateX(2px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }} />}
    </a>
  );
}
