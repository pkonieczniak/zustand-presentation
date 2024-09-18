import { Flex } from '@mantine/core';
import { Heading, Slide, Image } from 'spectacle';

export function Context() {
  return (
    <Slide className="full-width-slide">
      <Heading>Context</Heading>
      <Flex
        w={'100%'}
        h={'100%'}
        justify={'center'}
        style={{ position: 'relative', top: '-70px' }}
      >
        <Image
          objectFit="contain"
          src="/zustand-presentation/images/context.png"
          imgProps={{ width: '100%' }}
          alt="State sharing overview"
        />
      </Flex>
    </Slide>
  );
}
