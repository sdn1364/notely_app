'use client';

import {
    ActionIcon,
    Badge,
    Button,
    Divider,
    Flex,
    NavLink,
    Stack,
    TextInput,
    useMantineTheme,
} from '@mantine/core';
import {
    IconChevronRight,
    IconFolder,
    IconFolderOpen,
    IconFolderPlus,
    IconMenu2,
    IconPlus, IconSearch,
    IconStar,
    IconSun,
} from '@tabler/icons-react';
import { useFocusTrap, useListState } from '@mantine/hooks';
import classes from '@/components/homepage/todo/todo.module.css';
import { List } from '@/components/homepage/todo/todoGroup/components/list';

type TodoList = {
    id: number
    title: string
    children: null | TodoList[]
};

export function TodoGroup() {
    const [values, handlers] = useListState<TodoList>([]);
    const focusTrapRef = useFocusTrap();
    const theme = useMantineTheme();

    const addList = () => {
        handlers.append({
            id: values.length,
            title: 'Untitled list',
            children: null,
        });
    };
    const addGroup = () => {
        handlers.append({
            id: values.length,
            title: 'Untitled list',
            children: [],
        });
    };

    return <Stack className={classes.todoGroup} justify="space-between">
        <Stack>
            <TextInput placeholder="Search" rightSection={<IconSearch size="1rem" />} />
            <Stack gap={2}>
                <NavLink
                  active
                  leftSection={<IconSun color={theme.colors.grape[5]} size="1rem" />}
                  rightSection={<Badge circle color="gray" variant="light">1</Badge>}
                  label="My day"
                />
                <NavLink
                  leftSection={<IconStar color={theme.colors.orange[5]} size="1rem" />}
                  label="Important"
                />
            </Stack>
            <Divider />
            <Stack gap={2}>
                {values.map((value) => {
                    if (value.children) {
                        return <NavLink
                          leftSection={<IconFolderOpen size="1rem" />}
                          rightSection={<IconChevronRight size="1rem" />}
                          label="Untitled list"
                        >
                            <List ref={focusTrapRef} value={value} />
                            <List ref={focusTrapRef} value={value} />
                               </NavLink>;
                    }
                    return <List ref={focusTrapRef} value={value} />;
                })}
            </Stack>
        </Stack>

        <Flex gap={4} align="center">
            <Button
              justify="flex-start"
              fullWidth
              fw={300}
              variant="subtle"
              leftSection={<IconPlus size="1rem" />}
              onClick={addList}
            >New list
            </Button>
            <ActionIcon variant="subtle" size="lg" onClick={addGroup}><IconFolderPlus
              size="1rem"
            />
            </ActionIcon>
        </Flex>
           </Stack>;
}
