'use client';

import { Box, ScrollArea, Stack } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import classes from './today.module.css';

export default function Today() {
    return <Stack className={classes.todayContainer} gap={5}>
        <Box className={classes.calendarContainer}>
            <DatePicker
              hideOutsideDates
            />
        </Box>
        <div className={classes.dayScrollArea}>
            {
                [Array(24)].map((_, index) => (
                    <Box key={index} h={50} w={260} />
                ))
            }
        </div>
           </Stack>;
}
