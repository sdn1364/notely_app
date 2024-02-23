'use client';

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Widget } from '@/components';
import classes from '@/components/global.module.css';

export function TimeBox() {
    return <PanelGroup direction="vertical" autoSaveId="persistenceVertical">
        <Panel>
            <Widget h="100%">
                this is time boxer
            </Widget>
        </Panel>
        <PanelResizeHandle className={classes.ResizeHandleVertical} />
        <Panel>
            <Widget h="100%">
                this is time boxer
            </Widget>
        </Panel>
        <PanelResizeHandle className={classes.ResizeHandleVertical} />
        <Panel>
            <Widget h="100%">
                this is time boxer
            </Widget>
        </Panel>
           </PanelGroup>;
}
