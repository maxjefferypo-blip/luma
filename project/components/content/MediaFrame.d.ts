import * as React from 'react';

/**
 * Image container with brand radius and aspect ratio. With no `src`, renders a flat tonal placeholder
 * carrying an art-direction caption — use until real photography is supplied.
 */
export interface MediaFrameProps {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio. Default "4 / 5". */
  ratio?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** Placeholder ground colour. */
  tone?: 'stone' | 'mist' | 'bone' | 'peach' | 'charcoal';
  /** Art-direction note shown in the placeholder, e.g. "Bedside, warm lamp light". */
  caption?: string;
  fit?: 'cover' | 'contain';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function MediaFrame(props: MediaFrameProps): JSX.Element;
