import { useMantineColorScheme } from '@mantine/core';

export default function useLightDark(color:string) {
    const { colorScheme } = useMantineColorScheme();
    return colorScheme === 'light' ? `${color}.4` : `${color}.8`;
}
