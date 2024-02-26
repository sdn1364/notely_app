'use client';

import { Paper } from '@mantine/core';
import classes from './widget.module.css';
import { WidgetProps } from '@/types/widget';

export function Widget(props: WidgetProps) {
    return <Paper
      className={`${classes.widget} ${props.className}`}
      {...props}
    >
        {props.children}
           </Paper>;
}
