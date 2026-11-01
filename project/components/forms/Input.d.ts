import * as React from 'react';

/** Text field with optional label, hint and error. 8px radius, hairline border that darkens on focus. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  /** Error message — turns the border and message deep orange. */
  error?: string;
  size?: 'sm' | 'md';
  /** Bone text and borders for Charcoal grounds (footer newsletter). */
  inverse?: boolean;
  /** Element inside the field's right edge, e.g. a small Button. */
  trailing?: React.ReactNode;
  inputStyle?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
