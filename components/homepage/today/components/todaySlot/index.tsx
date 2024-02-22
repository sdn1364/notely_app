import { Group, Text } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './todaySlot.module.css';

export default function TodaySlot({ children }: { children: ReactNode }) {
    const pmAm = (value:number):string => {
        let time;
        if (value >= 1 && value < 12) {
            time = 'am';
        }
        if (value >= 12 && value < 24) {
            time = 'pm';
        }
        if (value === 24) {
            time = 'am';
        }
        return `${String(value > 12 ? value - 12 : value)}${time}`;
    };

    return <Group gap={5} className={classes.slot}>
        <Text fz={10}>{pmAm(children as number)}</Text>
        <div className={classes.divider} />
           </Group>;
}
