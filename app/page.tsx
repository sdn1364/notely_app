'use client';

import { Flex } from '@mantine/core';
import {
    getPanelElement,
    getPanelGroupElement,
    getResizeHandleElement,
    Panel,
    PanelGroup,
    PanelResizeHandle,
} from 'react-resizable-panels';
import { useEffect, useRef } from 'react';
import { Today, Diary, Todo, TimeBox } from '@/components';

export default function HomePage() {
    return (
        <Flex direction="row">

            <Today />
            <PanelGroup direction="horizontal">
                <Panel><Diary /></Panel>
                <PanelResizeHandle />
                <Panel><Todo /></Panel>
                <PanelResizeHandle />
                <Panel><TimeBox /></Panel>
            </PanelGroup>
        </Flex>
    );
}
