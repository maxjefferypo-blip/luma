import React, { useState } from 'react';
import { Icon } from '../actions/Icon.jsx';

export function Accordion({ items = [], defaultOpen = -1, inverse = false, style }) {
  const [open, setOpen] = useState(defaultOpen);
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const line = inverse ? 'var(--border-inverse)' : 'var(--border-hairline)';
  return (
    <div style={{ borderTop: `1px solid ${line}`, ...style }}>
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={i} style={{ borderBottom: `1px solid ${line}` }}>
            <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, padding: '20px 0', background: 'transparent', border: 0, color: ink, font: 'var(--text-h3)', textAlign: 'left', cursor: 'pointer' }}>
              <span>{it.title}</span>
              <Icon name="plus" size={20} style={{ transform: on ? 'rotate(45deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }} />
            </button>
            <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-base) var(--ease-out)' }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ paddingBottom: 24, maxWidth: 640, font: 'var(--text-body)', color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)' }}>{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
