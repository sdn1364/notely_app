import { useMantineColorScheme } from '@mantine/core';

export default function useLightDark(color:string, light:number = 6, dark:number = 7) {
    const { colorScheme } = useMantineColorScheme();
    return colorScheme === 'light' ? `${color}.${light}` : `${color}.${dark}`;
}
