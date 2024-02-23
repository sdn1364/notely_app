'use client';

import { Flex } from '@mantine/core';
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
} from 'react-resizable-panels';
import { Today, Diary, Todo, TimeBox } from '@/components';
import classes from '@/components/global.module.css';

export default function HomePage() {
    return (
        <Flex direction="row" style={{ marginTop: 'var(--widget-margin)' }}>
            <Today />
            <PanelGroup direction="horizontal" autoSaveId="persistence">
                <Panel><Diary /></Panel>
                <PanelResizeHandle className={classes.ResizeHandle} />
                <Panel><Todo /></Panel>
                <PanelResizeHandle className={classes.ResizeHandle} />
                <Panel><TimeBox /></Panel>
            </PanelGroup>
        </Flex>
    );
}
