'use client';

import { IconMenu2 } from '@tabler/icons-react';
import { NavLink, TextInput, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { Todo } from '@/types';

export function List({ value, ref }:Todo) {
    const theme = useMantineTheme();
    const [listInput, setListInput] = useState('');

    return <NavLink
      py={2}
      ref={ref}
      leftSection={<IconMenu2 color={theme.colors.blue[5]} size="1rem" />}
      label={value.title === 'Untitled list' ? <TextInput
        variant="unstyled"
        placeholder="Untitled list"
      /> : value.title}
    />;
}
