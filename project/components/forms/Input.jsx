import React, { useState, useId } from 'react';

export function Input({ label, hint, error, value, defaultValue, onChange, placeholder, type = 'text', size = 'md', inverse = false, trailing, disabled, id, style, inputStyle, ...rest }) {
  const auto = useId();
  const fid = id || auto;
  const [focus, setFocus] = useState(false);
  const h = size === 'sm' ? 40 : 52;
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)';
  const border = error ? 'var(--state-error)' : focus ? (inverse ? 'var(--luma-bone)' : 'var(--border-focus)') : (inverse ? 'rgba(245,241,234,.28)' : 'var(--border-strong)');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && <label htmlFor={fid} style={{ font: 'var(--text-caption)', color: sub }}>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'center', height: h, borderRadius: 'var(--radius-sm)', border: `1px solid ${border}`, background: 'transparent', padding: '0 4px 0 16px', gap: 8, opacity: disabled ? 0.5 : 1, transition: 'border-color var(--dur-fast) var(--ease-out)' }}>
        <input id={fid} type={type} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} aria-invalid={!!error || undefined}
          style={{ flex: 1, minWidth: 0, height: '100%', border: 0, outline: 'none', background: 'transparent', color: ink, font: 'var(--text-body)', padding: 0, ...inputStyle }} {...rest} />
        {trailing}
      </div>
      {(error || hint) && <span style={{ font: 'var(--text-caption)', color: error ? 'var(--state-error)' : (inverse ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)') }}>{error || hint}</span>}
    </div>
  );
}
