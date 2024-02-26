'use client';

import { Group, Paper, Checkbox, Text, ActionIcon, Stack } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classes from './task.module.css';

export function Task({ checked = false, item }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: item?.id,
        data: {
            type: 'Task',
            item,
        },
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    if (isDragging) {
        return <Paper
          withBorder
          ref={setNodeRef}
          style={{
            ...style,
        }}
          className={classes.task}
        />;
    }

    return <Paper
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
    }}
      className={classes.task}
      shadow={isDragging ? 'xl' : 'sm'}
    >

        <Group px="xs" h={50} justify="space-between">
           <Group>
               <Checkbox radius="xl" checked={checked} />
               <Stack gap={1}>
                   <Text td={checked && 'line-through'} fz={16}>{item?.label}</Text>
                   <Text fz={10}>My Day</Text>
               </Stack>
           </Group>
            <ActionIcon variant="transparent" color="gray"><IconStar size="1rem" /></ActionIcon>
        </Group>
           </Paper>;
}
