import React from 'react';

export function Tabs({ tabs = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 32, boxShadow: 'inset 0 -1px 0 var(--border-hairline)', overflowX: 'auto', ...style }}>
      {tabs.map((t) => {
        const id = t.id || t.label;
        const on = value === id;
        return (
          <button key={id} role="tab" type="button" aria-selected={on} onClick={() => onChange && onChange(id)}
            style={{ background: 'transparent', border: 0, padding: '0 0 14px', cursor: 'pointer', font: 'var(--text-body)', color: on ? 'var(--text-primary)' : 'var(--text-tertiary)', boxShadow: on ? 'inset 0 -1px 0 var(--luma-charcoal)' : 'none', whiteSpace: 'nowrap', transition: 'color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)' }}>
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
