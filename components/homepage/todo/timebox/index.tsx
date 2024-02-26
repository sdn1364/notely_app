'use client';

import { Text } from '@mantine/core';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Widget } from '@/components';
import classes from '@/components/global.module.css';

export function TimeBox() {
    return <PanelGroup direction="vertical" autoSaveId="persistenceVertical">
        <Panel>
            <Widget h="100%" p="md">
                <Text c="dimmed" fz="xl" fw={700}>Needs attention</Text>
            </Widget>
        </Panel>
        <PanelResizeHandle className={classes.ResizeHandleVertical} />
        <Panel>
            <Widget h="100%" p="md">
                <Text c="dimmed" fz="xl" fw={700}>Do it later</Text>
            </Widget>
        </Panel>
        <PanelResizeHandle className={classes.ResizeHandleVertical} />
        <Panel>
            <Widget h="100%" p="md">
                <Text c="dimmed" fz="xl" fw={700}>Postpone</Text>
            </Widget>
        </Panel>
           </PanelGroup>;
}
