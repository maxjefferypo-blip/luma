import * as React from 'react';

/** Pill − n + stepper for product and bag quantities. */
export interface QuantityStepperProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export declare function QuantityStepper(props: QuantityStepperProps): JSX.Element;
