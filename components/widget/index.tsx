import { Box } from '@mantine/core';
import { ReactNode } from '@mdx-js/react/lib';
import classes from './widget.module.css';

type WidgetProps = {
    w?: string | number
    className?: string
    children: ReactNode
};
export function Widget({ w = 'auto', className, children }:WidgetProps) {
    return <Box w={w} className={`${classes.widget} ${className}`}>
        {children}
           </Box>;
}
