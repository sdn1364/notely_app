'use client';

import { Box, ScrollArea, Stack } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import classes from './today.module.css';
import TodaySlot from './components/todaySlot';
import TimeSlot from './components/timeSlot';

export default function Today() {
    return <Stack className={classes.todayContainer} gap={5}>
        <Box className={classes.calendarContainer}>
            <DatePicker
              hideOutsideDates
            />
        </Box>
        <ScrollArea className={classes.dayScrollArea} scrollbarSize={5}>
            <Stack pos="relative" gap={0}>
                <TimeSlot />
                {
                    [...Array(24)].map((_, index) => (
                        <TodaySlot key={index}>{index + 1}</TodaySlot>
                    ))
                }
            </Stack>
        </ScrollArea>
           </Stack>;
}
