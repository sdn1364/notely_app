import { Group, Text } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './todaySlot.module.css';

export default function TodaySlot({ children }: { children: ReactNode }) {
    return <Group gap={5} className={classes.slot}>
        <Text fz={10}>{children}</Text>
        <div className={classes.divider} />
           </Group>;
}
