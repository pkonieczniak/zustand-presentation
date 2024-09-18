import { Flex } from '@mantine/core';
import { Heading, Slide, Image } from 'spectacle';

export function PropDrilling() {
  return (
    <Slide className="full-width-slide">
      <Heading>Prop drilling</Heading>
      <Flex
        w={'100%'}
        h={'100%'}
        justify={'center'}
        style={{ position: 'relative', top: '-50px' }}
      >
        <Image
          objectFit="contain"
          src="/public/images/prop-drilling.png"
          imgProps={{ width: '100%' }}
          alt="State sharing overview"
        />
      </Flex>
    </Slide>
  );
}
