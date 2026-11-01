import React from 'react';

// Standalone eclipse: peach behind, orange in front. Same geometry as the logo's eclipse.
export function EclipseMark({ size = 32, title, style, ...rest }) {
  return (
    <svg viewBox="0 0 51.56 51.56" width={size} height={size} role={title ? 'img' : undefined}
      aria-label={title} aria-hidden={title ? undefined : true}
      style={{ display: 'block', flex: 'none', ...style }} {...rest}>
      <circle cx="34.06" cy="24.7" r="17.5" fill="var(--logo-eclipse-back, #F5BFA9)" />
      <circle cx="17.5" cy="26.86" r="17.5" fill="var(--logo-eclipse-front, #D65D42)" />
    </svg>
  );
}
