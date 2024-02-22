import { Box } from '@mantine/core';
import { ReactNode } from '@mdx-js/react/lib';
import classes from './widget.module.css';

type WidgetProps = {
    className?: string
    children: ReactNode
};
export function Widget({ className, children }:WidgetProps) {
    return <Box className={`${classes.widget} ${className}`}>
        {children}
           </Box>;
}
