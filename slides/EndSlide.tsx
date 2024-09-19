import { Image, Flex } from '@mantine/core';
import { SlideLayout, Text } from 'spectacle';

export function EndSlide() {
  return (
    <SlideLayout.Statement>
      <Flex direction={'column'} align={'center'}>
        <Image src={'/zustand-presentation/images/devtank.png'} />
        <Text>Dziękuję za uwagę!</Text>
      </Flex>
    </SlideLayout.Statement>
  );
}
