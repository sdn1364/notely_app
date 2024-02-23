'use client';

import { Box } from '@mantine/core';
import classes from './timeSlot.module.css';
import { useLightDark } from '@/hooks';

type TimeSlotProps = {
    color?: string
};
export default function TimeSlot({ color = 'blue' }: TimeSlotProps) {
    return (<Box
      h={150}
      bg={useLightDark(color)}
      style={{ borderLeft: `5px solid var(--mantine-color-${color}-9)` }}
      className={classes.timeSlot}
      top={125}
    />);
}
