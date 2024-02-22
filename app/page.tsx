import { Flex } from '@mantine/core';
import { Today } from '@/components';
import { Diary } from '@/components/diary';

export default function HomePage() {
    return (
        <Flex direction="row">
            <Today />
            <Diary />
        </Flex>
    );
}
