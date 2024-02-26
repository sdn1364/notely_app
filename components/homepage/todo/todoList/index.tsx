'use client';

import { Button, Collapse, rem, Stack, Text } from '@mantine/core';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import dayjs from 'dayjs';
import { SortableContext } from '@dnd-kit/sortable';
import { Task } from '@/components';
import classes from './todoList.module.css';

export function TodoList() {
    const [opened, { toggle }] = useDisclosure(false);

    return <Stack gap={5} p={10} w="100%" justify="space-between">
        <Stack>
            <Stack gap={2} mb={5}>
                <Text size={rem(25)} fw={700} className={classes.listTitle}>My Day</Text>
                <Text size="xs" className={classes.listTitle}>{dayjs().format('dddd, MMMM D')}</Text>
            </Stack>
            <SortableContext items={[]}>
                <Stack w="100%" gap={4} />
            </SortableContext>
            <Button w="fit-content" size="sm" fw={300} justify="flex-start" variant="filled" color="gray" onClick={toggle} leftSection={opened ? <IconChevronRight size="1rem" /> : <IconChevronDown size="1rem" />}>Completed 1</Button>
            <Collapse in={opened}>
                <Stack w="100%" gap={4}>
                    <Task checked />
                </Stack>
            </Collapse>

        </Stack>
           </Stack>;
}
