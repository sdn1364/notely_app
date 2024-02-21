import React from 'react';
import './global.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, ColorSchemeScript, Flex, Box } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { theme } from '@/theme';
import { Menu } from '@/components';
import classes from './layout.module.css';

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
        <MantineProvider theme={theme} forceColorScheme="dark">
            <Notifications />
            <ModalsProvider>

            <Flex direction="row" gap={0}>
                <Menu />
                <Box className={classes.content}>
                    {children}
                </Box>
            </Flex>
            </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
