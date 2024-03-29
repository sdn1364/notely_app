import React from 'react';
import './global.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { theme } from '@/theme';
import { Menu } from '@/components';
import classes from './layout.module.css';
import StoreProvider from '@/app/StoreProvider';
import { Settings } from '@/components/shared/settings';

dayjs.extend(utc);

export const metadata = {
    title: 'Notely',
    description: 'Get your life together with Notely',
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript />
            <link rel="shortcut icon" href="/favicon.svg" />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body className={classes.body}>
        <StoreProvider>
            <MantineProvider theme={theme}>
                <Notifications />
                <ModalsProvider>
                    <Flex direction="row" gap={0} p={5}>
                        <Menu />
                        <div className={classes.content}>
                            {children}
                        </div>
                    </Flex>
                </ModalsProvider>
            </MantineProvider>
        </StoreProvider>
        </body>
        </html>
    );
}
