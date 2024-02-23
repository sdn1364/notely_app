'use client';

import { Widget } from '@/components';

type TodoProps = {
    w?: number | string
    h?: number | string
};

export function Todo({ w = 'auto', h = '100%' }: TodoProps) {
    return <Widget w={w} h={h}>
        this is todo list
           </Widget>;
}
