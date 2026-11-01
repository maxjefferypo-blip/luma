import React from 'react';

const TONES = { stone: 'var(--luma-stone)', mist: 'var(--luma-mist)', bone: 'var(--luma-bone)', peach: 'var(--luma-peach)', charcoal: 'var(--luma-charcoal)' };

export function MediaFrame({ src, alt = '', ratio = '4 / 5', radius = 'md', tone = 'stone', caption, fit = 'cover', style, children }) {
  const r = radius === 'none' ? 0 : `var(--radius-${radius})`;
  const dark = tone === 'charcoal';
  return (
    <div style={{ position: 'relative', aspectRatio: ratio, borderRadius: r, overflow: 'hidden', background: TONES[tone] || TONES.stone, ...style }}>
      {src ? <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit, display: 'block' }} />
        : caption && <span style={{ position: 'absolute', left: 16, bottom: 14, right: 16, font: '12px/16px var(--font-body)', letterSpacing: '0.02em', color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-tertiary)' }}>{caption}</span>}
      {children}
    </div>
  );
}
