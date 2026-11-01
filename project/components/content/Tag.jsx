import React from 'react';

const TONES = {
  neutral: { bg: 'var(--luma-stone)', fg: 'var(--text-primary)', bd: 'transparent' },
  outline: { bg: 'transparent', fg: 'var(--text-primary)', bd: 'var(--border-strong)' },
  accent: { bg: 'var(--luma-peach)', fg: 'var(--luma-charcoal)', bd: 'transparent' },
  cool: { bg: 'var(--luma-mist)', fg: 'var(--luma-charcoal)', bd: 'transparent' },
  inverse: { bg: 'rgba(245,241,234,.12)', fg: 'var(--luma-bone)', bd: 'transparent' },
};

export function Tag({ children, tone = 'neutral', style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', height: 26, padding: '0 12px', borderRadius: 'var(--radius-pill)', background: t.bg, color: t.fg, border: `1px solid ${t.bd}`, font: 'var(--weight-medium) 11px/16px var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap', ...style }} {...rest}>
      {children}
    </span>
  );
}
