import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Input } from '../forms/Input.jsx';
import { Button } from '../actions/Button.jsx';

const DEFAULT_COLUMNS = [
  { title: 'Shop', links: ['LC–01', 'Applicator', 'Gift cards'] },
  { title: 'Learn', links: ['The science', 'Test results', 'Installation'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Contact'] },
];

export function SiteFooter({ columns = DEFAULT_COLUMNS, disclaimer = 'Luma LC–01 is a screen protector, not a medical device. Test figures describe a measured sample and are not health claims.', compact = false, statement, signature = false, style }) {
  const link = { font: 'var(--text-caption)', color: 'var(--text-inverse-secondary)', textDecoration: 'none' };
  return (
    <footer style={{ background: 'var(--bg-inverse)', color: 'var(--text-inverse)', padding: compact ? '56px var(--gutter-mobile) 32px' : '96px var(--gutter-desktop) 40px', ...style }}>
      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))', gap: compact ? 40 : 48, maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: statement ? 520 : 380 }}>
          <Logo variant="reversed" height={36} />
          {statement && <p style={{ font: 'var(--text-h2)', letterSpacing: 'var(--type-h2-track)', color: 'var(--text-inverse)', margin: '8px 0 16px' }}>{statement}</p>}
          <p style={{ font: 'var(--text-body)', color: 'var(--text-inverse-secondary)' }}>Notes on light, screens and the science behind LC–01. Occasional, never noisy.</p>
          <Input inverse placeholder="Email address" aria-label="Email address" trailing={<Button size="sm" variant="inverse">Join</Button>} />
        </div>
        {columns.map((c) => (
          <div key={c.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--type-overline-track)', textTransform: 'uppercase', color: 'var(--text-inverse)', marginBottom: 4 }}>{c.title}</span>
            {c.links.map((l) => <a key={l} href="#" style={link}>{l}</a>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: compact ? '48px auto 0' : '96px auto 0', paddingTop: 24, borderTop: '1px solid var(--border-inverse)', display: 'flex', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ font: '12px/18px var(--font-body)', color: 'var(--text-inverse-secondary)', maxWidth: 560 }}>{disclaimer}</span>
        <span style={{ font: '12px/18px var(--font-body)', color: 'var(--text-inverse-secondary)', whiteSpace: 'nowrap' }}>© Luma</span>
      </div>
      {signature && <div style={{ maxWidth: 'var(--container-max)', margin: compact ? '48px auto 0' : '120px auto 0' }}><Logo variant="reversed" style={{ width: '100%', height: 'auto' }} /></div>}
    </footer>
  );
}
