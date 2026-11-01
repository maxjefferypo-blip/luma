import React, { useState } from 'react';
import { Icon } from '../actions/Icon.jsx';

export function QuantityStepper({ value, defaultValue = 1, min = 1, max = 9, onChange, size = 'md', style }) {
  const [inner, setInner] = useState(defaultValue);
  const v = value ?? inner;
  const set = (n) => { const c = Math.max(min, Math.min(max, n)); if (value === undefined) setInner(c); onChange && onChange(c); };
  const h = size === 'sm' ? 36 : 52;
  const btn = (dis) => ({ width: h, height: h - 2, border: 0, background: 'transparent', color: 'var(--text-primary)', display: 'grid', placeItems: 'center', cursor: dis ? 'not-allowed' : 'pointer', opacity: dis ? 0.3 : 1, padding: 0 });
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', height: h, borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-strong)', ...style }}>
      <button type="button" aria-label="Decrease" onClick={() => set(v - 1)} disabled={v <= min} style={btn(v <= min)}><Icon name="minus" size={16} /></button>
      <span aria-live="polite" style={{ minWidth: 20, textAlign: 'center', font: 'var(--text-body)', fontVariantNumeric: 'tabular-nums' }}>{v}</span>
      <button type="button" aria-label="Increase" onClick={() => set(v + 1)} disabled={v >= max} style={btn(v >= max)}><Icon name="plus" size={16} /></button>
    </div>
  );
}
