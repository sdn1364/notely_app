import { Flex } from '@mantine/core';
import { Today } from '@/components';

export default function HomePage() {
  return (
      <Flex direction="row">
        <Today />
      </Flex>
  );
}
