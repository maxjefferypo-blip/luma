import * as React from 'react';

/** The standalone eclipse brand mark — favicon, avatar, packaging seal, small sign-offs. Minimum 12px. */
export interface EclipseMarkProps extends React.SVGAttributes<SVGSVGElement> {
  /** Square size in px. Default 32. */
  size?: number;
  /** Accessible name; omit when decorative. */
  title?: string;
}

export declare function EclipseMark(props: EclipseMarkProps): JSX.Element;
