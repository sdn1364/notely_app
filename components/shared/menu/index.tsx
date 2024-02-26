'use client';

import {
    ActionIcon,
    Avatar,
    Stack,
    ThemeIcon,
    Tooltip,
    useMantineColorScheme,
    Menu as BtnMenu,
    rem,
    Text,
} from '@mantine/core';
import {
    IconArrowsLeftRight,
    IconLayoutDashboard, IconMessageCircle,
    IconMoon, IconPhoto,
    IconPigMoney, IconSearch, IconSettings,
    IconSun,
    IconTrash,
} from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';

import { openModal } from '@mantine/modals';
import classes from './menu.module.css';
import { Settings } from '@/components/shared/settings';

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

    return <aside>
        <Stack gap={5} align="center" justify="space-between" py="md" className={classes.menu}>
            <Stack>

                {
                    menus.map(menu => {
                        const Icon = (menu.icon);
                        if (routing === menu.path) {
                            return <Tooltip key={menu.id} label={menu.label} position="right">
                                <ThemeIcon key={menu.id}>
                                    <Icon size="1rem" />
                                </ThemeIcon>
                                   </Tooltip>;
                        }
                        return <Tooltip key={menu.id} label={menu.label} position="right">
                            <ActionIcon onClick={() => navigateToPath(menu.path)} size="md" variant="subtle">
                                <Icon size="1rem" />
                            </ActionIcon>
                               </Tooltip>;
                    })
                }

            </Stack>
            <Stack gap={5} align="center" justify="space-between">

                <BtnMenu shadow="md" width={200} position="right-end">
                    <BtnMenu.Target>
                        <ActionIcon variant="transparent" radius="xl">
                            <Avatar
                              size="sm"
                              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDY1NDI0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                            />
                        </ActionIcon>
                    </BtnMenu.Target>

                    <BtnMenu.Dropdown>
                        <BtnMenu.Label>Application</BtnMenu.Label>
                        <BtnMenu.Item
                          leftSection={<IconSettings style={{
                                width: rem(14),
                                height: rem(14),
                            }}
                          />}
                          onClick={
                                () => openModal({
                                    children: <Settings />,
                                    withCloseButton: false,
                                    size: 700,
                                    withinPortal: true,
                                    padding: 0,
                                    overlayProps: {
                                        backgroundOpacity: 0.55,
                                        blur: 3,
                                    },
                                })
                            }
                        >
                            Settings
                        </BtnMenu.Item>
                        <BtnMenu.Item leftSection={<IconMessageCircle style={{
                            width: rem(14),
                            height: rem(14),
                        }}
                        />}
                        >
                            Messages
                        </BtnMenu.Item>
                        <BtnMenu.Item leftSection={<IconPhoto style={{
                            width: rem(14),
                            height: rem(14),
                        }}
                        />}
                        >
                            Gallery
                        </BtnMenu.Item>
                        <BtnMenu.Item
                          leftSection={<IconSearch style={{
                                width: rem(14),
                                height: rem(14),
                            }}
                          />}
                          rightSection={
                                <Text size="xs" c="dimmed">
                                    ⌘K
                                </Text>
                            }
                        >
                            Search
                        </BtnMenu.Item>

                        <BtnMenu.Divider />

                        <BtnMenu.Label>Danger zone</BtnMenu.Label>
                        <BtnMenu.Item
                          leftSection={<IconArrowsLeftRight style={{
                                width: rem(14),
                                height: rem(14),
                            }}
                          />}
                        >
                            Transfer my data
                        </BtnMenu.Item>
                        <BtnMenu.Item
                          color="red"
                          leftSection={<IconTrash style={{
                                width: rem(14),
                                height: rem(14),
                            }}
                          />}
                        >
                            Delete my account
                        </BtnMenu.Item>
                    </BtnMenu.Dropdown>
                </BtnMenu>
            </Stack>
        </Stack>
           </aside>;
}
