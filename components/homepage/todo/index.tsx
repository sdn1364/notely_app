'use client';

import { Flex } from '@mantine/core';
import { TodoGroup, TodoList, Widget } from '@/components';

type TodoProps = {
    w?: number | string
    h?: number | string
};

export function Todo({
                         w = '100%',
                         h = '100%',
                     }: TodoProps) {
    return <Widget w={w} h={h}>
        <Flex w="100%">
            <TodoGroup />
            <TodoList />
        </Flex>
           </Widget>;
}
