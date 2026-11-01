import React, { useState } from 'react';
import { Icon } from '../actions/Icon.jsx';

export function Checkbox({ label, checked, defaultChecked = false, onChange, disabled, style }) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => { if (disabled) return; const n = !on; if (checked === undefined) setInner(n); onChange && onChange(n); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <button type="button" role="checkbox" aria-checked={on} onClick={toggle} disabled={disabled}
        style={{ width: 20, height: 20, marginTop: 2, flex: 'none', borderRadius: 'var(--radius-xs)', border: `1px solid ${on ? 'var(--luma-charcoal)' : 'var(--border-strong)'}`, background: on ? 'var(--luma-charcoal)' : 'transparent', color: 'var(--luma-bone)', display: 'grid', placeItems: 'center', padding: 0, cursor: 'inherit', transition: 'background var(--dur-fast) var(--ease-out)' }}>
        {on && <Icon name="check" size={14} strokeWidth={2} />}
      </button>
      {label && <span onClick={toggle} style={{ font: 'var(--text-body)', color: 'var(--text-secondary)' }}>{label}</span>}
    </label>
  );
}
