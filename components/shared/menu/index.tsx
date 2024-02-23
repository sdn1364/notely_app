'use client';

import { ActionIcon, Avatar, Stack, ThemeIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconLayoutDashboard, IconMoon, IconPigMoney, IconSun } from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';

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
    const routing = usePathname();
    const router = useRouter();

    const {
        colorScheme,
        setColorScheme,
    } = useMantineColorScheme();

    const navigateToPath = (path: string) => {
        router.push(path);
    };

    return <Stack gap={5} align="center" justify="space-between" py="md" className={classes.menu}>
        <Stack>

            {
                menus.map(menu => {
                    const Icon = (menu.icon);
                    if (routing === menu.path) {
                        return <Tooltip key={menu.id} label={menu.label} position="right">
                            <ThemeIcon key={menu.id}>
                                <Icon size={16} stroke={1.5} />
                            </ThemeIcon>
                               </Tooltip>;
                    }
                    return <Tooltip key={menu.id} label={menu.label} position="right">
                        <ActionIcon onClick={() => navigateToPath(menu.path)} size="md" variant="subtle">
                            <Icon size={16} stroke={1.5} />
                        </ActionIcon>
                           </Tooltip>;
                })
            }

        </Stack>
        <Stack gap={5} align="center" justify="space-between">
            {
                colorScheme === 'dark'
                    ? <ActionIcon variant="subtle" onClick={() => setColorScheme('light')}><IconSun
                        size={16}
                        stroke={1.5}
                    />
                      </ActionIcon>
                    : <ActionIcon variant="subtle" onClick={() => setColorScheme('dark')}><IconMoon
                        size={16}
                        stroke={1.5}
                    />
                      </ActionIcon>
            }
            <Avatar size="sm" />
        </Stack>
           </Stack>;
}
