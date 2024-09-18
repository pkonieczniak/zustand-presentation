import { GridCol, Flex, Grid, Button, Text } from '@mantine/core';
import { useState } from 'react';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Slide, Heading, Appear, CodePane } from 'spectacle';

export function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <Slide className="overflow-auto">
      <Heading>Stan przykład</Heading>
      <Grid>
        <GridCol span={6}>
          <Flex direction={'column'} align={'center'} gap={'md'} w={'100%'}>
            <div style={{ width: '100%' }}>
              <CodePane language="tsx" theme={synthwave84}>
                {`
                  function Counter () {
                    const [count, setCount] = useState(0);

                    return (
                      <Flex gap={'xl'} align={'center'}>
                        <Button 
                          onClick={() => setCount(prev => prev + 1)}>+</Button>
                        <Text size="xl">{count}</Text>
                        <Button
                          disabled={count <= 0}
                          onClick={() => setCount(prev => prev - 1)}
                        >
                          -
                        </Button>
                      </Flex>
                    )
                  }
                  `}
              </CodePane>
            </div>
          </Flex>
        </GridCol>
        <GridCol span={6}>
          <Flex
            gap={'xl'}
            align={'center'}
            justify={'center'}
            w={'100%'}
            h={'100%'}
          >
            <Button onClick={() => setCount(prev => prev + 1)}>+</Button>
            <Text size="xl">{count}</Text>
            <Button
              disabled={count <= 0}
              onClick={() => setCount(prev => prev - 1)}
            >
              -
            </Button>
          </Flex>
        </GridCol>
      </Grid>
    </Slide>
  );
}
