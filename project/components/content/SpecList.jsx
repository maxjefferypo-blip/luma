import React from 'react';

export function SpecList({ items = [], layout = 'rows', inverse = false, style }) {
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = inverse ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)';
  const line = inverse ? 'var(--border-inverse)' : 'var(--border-hairline)';
  if (layout === 'figures') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0,1fr))`, gap: 24, ...style }}>
        {items.map((it, i) => (
          <div key={i} style={{ borderTop: `1px solid ${line}`, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: 'var(--weight-regular) 40px/44px var(--font-display)', letterSpacing: '-0.025em', color: ink }}>{it.value}</span>
            <span style={{ font: 'var(--text-caption)', color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)' }}>{it.label}</span>
            {it.note && <span style={{ font: '12px/16px var(--font-body)', color: sub }}>{it.note}</span>}
          </div>
        ))}
      </div>
    );
  }
  return (
    <dl style={{ margin: 0, ...style }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, padding: '14px 0', borderTop: `1px solid ${line}`, borderBottom: i === items.length - 1 ? `1px solid ${line}` : 'none' }}>
          <dt style={{ flex: '1 1 0', minWidth: 0, font: 'var(--text-caption)', color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)' }}>{it.label}</dt>
          <dd style={{ flex: '0 0 auto', maxWidth: '62%', margin: 0, font: 'var(--text-body)', color: ink, textAlign: 'right' }}>
            {it.value}{it.note && <span style={{ display: 'block', font: '12px/16px var(--font-body)', color: sub }}>{it.note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
