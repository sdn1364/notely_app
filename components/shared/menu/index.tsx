'use client';

import { ActionIcon, Avatar, Stack, ThemeIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconLayoutDashboard, IconMoon, IconPigMoney, IconSun } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classes from './menu.module.css';

export default function Menu() {
    const menus = [
        {
            id: 1,
            label: 'Dashboard',
            icon: IconLayoutDashboard,
            path: '/',
        },
        {
            id: 2,
            label: 'Finance',
            icon: IconPigMoney,
            path: '/finance',
        },
    ];
    const router = usePathname();
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return <Stack gap={5} align="center" justify="space-between" py="md" className={classes.menu}>
        <Stack>

            {
                menus.map(menu => {
                    const Icon = menu.icon;
                    if (router === menu.path) {
                        return <ThemeIcon key={menu.id}>
                            <Icon size={16} stroke={1.5} />
                               </ThemeIcon>;
                    }
                    return <Tooltip key={menu.id} label={menu.label} position="right">
                        <ActionIcon component={Link} href={menu.path} size="md" variant="subtle">
                            <Icon size={16} stroke={1.5} />
                        </ActionIcon>
                           </Tooltip>;
                })
            }

        </Stack>
        <Stack gap={5} align="center" justify="space-between">
            {
                colorScheme === 'dark'
                    ? <ActionIcon variant="subtle" onClick={() => setColorScheme('light')}><IconSun size={16} stroke={1.5} /></ActionIcon>
                    : <ActionIcon variant="subtle" onClick={() => setColorScheme('dark')}><IconMoon size={16} stroke={1.5} /></ActionIcon>
            }
            <Avatar size="sm" />
        </Stack>
           </Stack>;
}
