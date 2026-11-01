import * as React from 'react';
import type { IconName } from './Icon';

/**
 * Pill button. One primary (orange) per view; everything else is dark, outline or ghost.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'inverse' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Uppercase + 0.06em tracking (board style). Default true; set false for sentence-case UI buttons. */
  caps?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
