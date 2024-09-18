import { GridCol, Flex, Grid, Button, Text } from '@mantine/core';
import { IconBasketOff } from '@tabler/icons-react';
import { useState } from 'react';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Slide, Heading, Appear, CodePane } from 'spectacle';

export function SharingStateExample() {
  const [count, setCount] = useState(0);

  return (
    <Slide className="overflow-auto">
      <Heading>Współdzielenie stanu - Lifting State up</Heading>
      <Grid>
        <GridCol span={6}>
          <Flex direction={'column'} align={'center'} gap={'md'} w={'100%'}>
            <div style={{ width: '100%' }}>
              <CodePane language="tsx" theme={synthwave84}>
                {`
                  function CounterForm () {
                    const [count, setCount] = useState(0);

                    return (
                      <Container>
                        <Counter count={count} setCount={setCount} />
                        <CounterDisplay count={count} />
                        <Button disabled={!count}>Submit<Button/>
                      </Container>
                    )
                  }
                  `}
              </CodePane>
            </div>
          </Flex>
        </GridCol>
        <GridCol span={6}>
          <Flex gap={'xl'} align={'center'} justify={'center'}>
            <Button onClick={() => setCount(prev => prev + 1)}>+</Button>
            <Button
              disabled={count <= 0}
              onClick={() => setCount(prev => prev - 1)}
            >
              -
            </Button>
          </Flex>
          <Flex justify={'center'} mt={'sm'}>
            {!count ? (
              <Text display={'flex'} m={''}>
                <span style={{ marginRight: '12px' }}>
                  Brak elementów w koszyku
                </span>
                <IconBasketOff />
              </Text>
            ) : (
              <Text>Liczba elementów w koszyku {count}</Text>
            )}
          </Flex>
          <Flex justify={'center'} mt={'md'}>
            <Button w={'50%'} disabled={!count}>
              Zamów
            </Button>
          </Flex>
        </GridCol>
      </Grid>
    </Slide>
  );
}
