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
        <Flex direction="row">
            <Today />
            <PanelGroup direction="horizontal" autoSaveId="persistence">
                <Panel
                  maxSize={40}
                  defaultSize={33.3333333334}
                  minSize={33.3333333334}
                >
                    <Diary />
                </Panel>
                <PanelResizeHandle className={classes.ResizeHandle} />
                <Panel defaultSize={25}><Todo /></Panel>
                <PanelResizeHandle className={classes.ResizeHandle} />
                <Panel defaultSize={25}><TimeBox /></Panel>
            </PanelGroup>
        </Flex>
    );
}
