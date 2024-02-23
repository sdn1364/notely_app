'use client';

import { ScrollArea, Stack } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { range } from '@mantine/hooks';
import classes from './today.module.css';
import TodaySlot from './components/todaySlot';
import TimeSlot from './components/timeSlot';
import { Widget } from '@/components';

export function Today() {
    return <Stack className={classes.todayContainer} gap={0}>
        <Widget className={classes.calendarContainer}>
            <DatePicker hideOutsideDates />
        </Widget>
        <Widget>
            <ScrollArea className={classes.dayScrollArea} scrollbarSize={5}>
                <Stack pos="relative" gap={0}>
                    <TimeSlot />
                    {
                        range(0, 23)
                            .map((_, index) => (
                                <TodaySlot key={index}>{index + 1}</TodaySlot>
                            ))
                    }
                </Stack>
            </ScrollArea>
        </Widget>
           </Stack>;
}
