'use client';

import { ReactNode } from '@mdx-js/react/lib';
import { forwardRef } from 'react';
import classes from './widget.module.css';

type WidgetProps = {
    w?: string | number
    h?: string | number
    className?: string
    children: ReactNode
};
type Ref = HTMLDivElement;

export const Widget = forwardRef<Ref, WidgetProps>((props, ref) => (<div
  ref={ref}
  style={{ width: props.w, height: props.h }}
  className={`${classes.widget} ${props.className}`}
>
    {props.children}
                                                                    </div>));
