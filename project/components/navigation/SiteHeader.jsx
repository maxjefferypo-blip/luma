import React, { useState } from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Icon } from '../actions/Icon.jsx';

function NavLink({ item, active, inverse, onNavigate }) {
  const [hover, setHover] = useState(false);
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  return (
    <a href={item.href || '#'} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(item.id || item.href); } }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ font: 'var(--text-body)', color: ink, textDecoration: 'none', paddingBottom: 2, borderBottom: `1px solid ${active || hover ? 'currentColor' : 'transparent'}`, transition: 'border-color var(--dur-fast) var(--ease-out)' }}>
      {item.label}
    </a>
  );
}

export function SiteHeader({ links = [{ id: 'science', label: 'Science' }, { id: 'shop', label: 'Shop' }, { id: 'technology', label: 'Technology' }], active, cartCount = 0, onNavigate, onCart, onHome, inverse = false, compact = false, action, style }) {
  const ink = inverse ? 'var(--text-inverse)' : 'var(--text-primary)';
  const iconBtn = { width: 44, height: 44, display: 'grid', placeItems: 'center', background: 'transparent', border: 0, color: ink, cursor: 'pointer', padding: 0, position: 'relative' };
  return (
    <header style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: compact ? '0 var(--gutter-mobile)' : '0 var(--gutter-desktop)', borderBottom: `1px solid ${inverse ? 'var(--border-inverse)' : 'var(--border-hairline)'}`, background: inverse ? 'var(--bg-inverse)' : 'var(--bg-page)', color: ink, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
        <a href="#" aria-label="Luma home" onClick={(e) => { if (onHome) { e.preventDefault(); onHome(); } }} style={{ display: 'block' }}>
          <Logo height={compact ? 24 : 28} variant={inverse ? 'reversed' : 'primary'} />
        </a>
        {!compact && <nav style={{ display: 'flex', gap: 32 }}>{links.map((l) => <NavLink key={l.id || l.label} item={l} active={active === (l.id || l.href)} inverse={inverse} onNavigate={onNavigate} />)}</nav>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {action && !compact && <div style={{ marginRight: 12, display: 'flex' }}>{action}</div>}
        {!compact && <button type="button" aria-label="Account" style={iconBtn}><Icon name="user" size={22} /></button>}
        <button type="button" aria-label={`Bag, ${cartCount} items`} onClick={onCart} style={iconBtn}>
          <Icon name="shopping-bag" size={22} />
          {cartCount > 0 && <span style={{ position: 'absolute', top: 6, right: 4, minWidth: 18, height: 18, padding: '0 5px', borderRadius: 9, background: 'var(--accent)', color: 'var(--text-on-accent)', font: '500 11px/18px var(--font-body)', textAlign: 'center' }}>{cartCount}</span>}
        </button>
        {compact && <button type="button" aria-label="Menu" style={iconBtn}><Icon name="menu" size={22} /></button>}
      </div>
    </header>
  );
}
