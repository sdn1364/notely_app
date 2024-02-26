import { MantineColorScheme, Tabs, useMantineColorScheme, Stack, Text, Group, Select, CloseButton } from '@mantine/core';
import { closeAllModals } from '@mantine/modals';
import classes from './settings.module.css';

export function Settings() {
    const {
        colorScheme,
        setColorScheme,
    } = useMantineColorScheme();

    const onColorSchemeChange = (colorScheme: MantineColorScheme) => {
        setColorScheme(colorScheme);
    };
    return <Tabs
      color="gray"
      defaultValue="general"
      variant="pills"
      orientation="vertical"
      classNames={classes}
    >
        <CloseButton onClick={closeAllModals} pos="absolute" right={5} top={5} mb="md" />

        <Tabs.List>
            <Text pl="md" fw={500} size="xl" mb="md">Settings</Text>
            <Tabs.Tab value="general">General</Tabs.Tab>
            <Tabs.Tab value="second">
                Blue tab
            </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="general">
            <Stack>
                <Group justify="space-between">
                    <Text>Theme</Text>
                    <Select
                      placeholder="Select theme"
                      value={colorScheme}
                      onChange={(val) => onColorSchemeChange(val)}
                      data={['light', 'dark', 'auto']}
                    />
                </Group>
            </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="second">
            Second tab color is blue, it gets this value from props, props have the priority and will
            override context value
        </Tabs.Panel>
           </Tabs>;
}
