import { Box } from '@mantine/core';
import classes from './timeSlot.module.css';
import useLightDark from '@/hooks/useLightDark';

type TimeSlotProps = {
    color?: string
};
export default function TimeSlot({ color = 'cyan' }:TimeSlotProps) {
    return (<Box h={150} bg={useLightDark(color)} className={classes.timeSlot} top={125} />);
}
