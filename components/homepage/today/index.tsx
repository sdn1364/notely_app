'use client';

import { Box, ScrollArea, Stack } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import classes from './today.module.css';
import { Widget } from '@/components';

export function Today() {
    return <Stack className={classes.todayContainer} gap={0}>
        <Widget className={classes.calendarContainer}>
            <DatePicker
              hideOutsideDates
            />
        </Widget>
        <Widget>
            <div className={classes.dayScrollArea}>
                {
                    [Array(24)].map((_, index) => (
                        <Box key={index} h={50} w={260} />
                    ))
                }
            </div>
        </Widget>
           </Stack>;
}
