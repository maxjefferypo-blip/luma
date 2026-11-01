import React from 'react';

// Master vector wordmark, traced from the approved typography board (units: 1 = 1px at 152.2px ascender).
export const WORDMARK_PATH = 'M0 0H20.6V117.2C20.6 141.2 32.74 148.19 37.2 152.2H26.8A26.8 32.4 0 0 1 0 119.8ZM39.7 49H59V105.4A30.15 30.2 0 0 0 119.3 105.4V49H138.5V105.4A49.4 49.4 0 0 1 39.7 105.4ZM148.4 152.2V83.2A39.8 36.3 0 0 1 218.58 59.75A39.4 36.3 0 0 1 288.05 83.2V152.2H269.3V86.3A20.65 21.1 0 0 0 228 86.3V152.2H209.2V86.3A20.85 21.1 0 0 0 167.5 86.3V152.2ZM404 152.2V100.35A53.7 54.35 0 0 0 350.3 46A53.7 54.35 0 0 0 296.6 100.35A53.7 54.35 0 0 0 350.3 154.7C372.3 154.7 382.65 140.04 385.3 135.8V152.2ZM385.3 100.25A34.4 35.55 0 0 1 316.5 100.25A34.4 35.55 0 0 1 385.3 100.25Z';
// Eclipse: orange centre sits on the a-stem's outer edge (x=404); its bottom rests on the x-height (y=49).
export const ECLIPSE = { r: 17.5, front: [404, 31.5], back: [420.56, 29.34] };

export function Logo({ variant = 'primary', height = 32, title = 'luma', style, ...rest }) {
  const withEclipse = variant !== 'wordmark';
  const vbW = withEclipse ? 438.06 : 404;
  const ink = variant === 'reversed' ? 'var(--logo-ink-reversed, #FFFFFF)' : 'var(--logo-ink, #1F2326)';
  const width = (height * vbW) / 154.7;
  return (
    <svg viewBox={`0 0 ${vbW} 154.7`} width={width} height={height} role="img" aria-label={title}
      style={{ display: 'block', flex: 'none', ...style }} {...rest}>
      <path d={WORDMARK_PATH} fill={ink} />
      {withEclipse && <circle cx={ECLIPSE.back[0]} cy={ECLIPSE.back[1]} r={ECLIPSE.r} fill="var(--logo-eclipse-back, #F5BFA9)" />}
      {withEclipse && <circle cx={ECLIPSE.front[0]} cy={ECLIPSE.front[1]} r={ECLIPSE.r} fill="var(--logo-eclipse-front, #D65D42)" />}
    </svg>
  );
}
