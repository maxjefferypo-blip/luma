import React, { useState } from 'react';
import { MediaFrame } from './MediaFrame.jsx';
import { Tag } from './Tag.jsx';
import { Icon } from '../actions/Icon.jsx';

export function ProductCard({ name, descriptor, price, tag, image, imageCaption = 'Product on Stone', tone = 'stone', href = '#', onClick, style }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--text-primary)', textDecoration: 'none', ...style }}>
      <MediaFrame src={image} ratio="4 / 5" tone={tone} caption={imageCaption}>
        {tag && <Tag tone="inverse" style={{ position: 'absolute', top: 14, left: 14, background: 'var(--luma-bone)', color: 'var(--luma-charcoal)' }}>{tag}</Tag>}
      </MediaFrame>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ font: 'var(--text-h3)' }}>{name}</span>
          {descriptor && <span style={{ font: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>{descriptor}</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--text-body)' }}>
          {price}
          <Icon name="arrow-right" size={18} style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }} />
        </div>
      </div>
    </a>
  );
}
