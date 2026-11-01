import * as React from 'react';

/** Small uppercase pill label — "New", "LC–01", "In stock". Never used as a button. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'outline' | 'accent' | 'cool' | 'inverse';
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
