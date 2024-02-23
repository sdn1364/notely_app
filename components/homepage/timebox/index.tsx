'use client';

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Widget } from '@/components';
import classes from './timeBox.module.css';

export function TimeBox() {
    return <PanelGroup direction="vertical">
        <Panel>
            <Widget h="100%">
                this is time boxer
            </Widget>
        </Panel>
        <PanelResizeHandle />
        <Panel>
            <Widget h="100%">
                this is time boxer
            </Widget>
        </Panel>
        <PanelResizeHandle />
        <Panel>
            <Widget h="100%">
                this is time boxer
            </Widget>
        </Panel>
           </PanelGroup>;
}
