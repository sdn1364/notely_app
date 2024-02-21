'use client';

import { ActionIcon, Avatar, Stack, ThemeIcon, Tooltip } from '@mantine/core';
import { IconLayoutDashboard, IconPigMoney } from '@tabler/icons-react';
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
        <Stack>
            <Avatar />
        </Stack>
           </Stack>;
}
