import { Appear, CodePane, Heading, Slide } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';
import { Grid, GridCol, Flex } from '@mantine/core';
import { IconX, IconCheck } from '@tabler/icons-react';

export function ContextUnnecessaryRerenders() {
  return (
    <Slide className="overflow-auto full-width-slide">
      <Heading>Nadmiarowe renderowanie komponentów</Heading>
      <Grid style={{ position: 'relative', top: '-50px' }}>
        <GridCol span={6}>
          <Flex direction={'column'} align={'center'} gap={'md'} w={'100%'}>
            <IconX color="red" size={'2rem'} />
            <div style={{ width: '100%' }}>
              <CodePane language="tsx" theme={synthwave84}>
                {`
                    function VolleyballFixturesProvider () {
                      return (
                        <VolleyballFixturesContext.Provider
                          value={{ fixtures, fixturesLoading }}
                        >
                          <LikeButton />
                          <VolleyballFixtures />
                          <VolleyballFixturesFollowed />
                        </VolleyballFixtures.Provider>  
                      )
                    }

                    function App () {
                      return (
                        <VolleyballFixturesProvider />
                      )
                    }  
                  `}
              </CodePane>
            </div>
          </Flex>
        </GridCol>
        <GridCol span={6}>
          <Flex direction={'column'} align={'center'} gap={'md'}>
            <IconCheck color="green" size={'2rem'} />
            <div style={{ width: '100%' }}>
              <CodePane language="tsx" theme={synthwave84}>
                {`
                    function VolleyballFixturesProvider () {
                      return (
                        <VolleyballFixturesContext.Provider
                          value={{ fixtures, fixturesLoading, }}
                        >
                          {children}
                        </VolleyballFixtures.Provider>  
                      )
                    }
                    
                    function App () {
                      return (
                        <VolleyballFixturesProvider>
                          <LikeButton />
                          <VolleyballFixtures />
                          <VolleyballFixturesFollowed />
                        </VolleyballFixturesProvider>
                      )
                    }  
                  `}
              </CodePane>
            </div>
          </Flex>
        </GridCol>
      </Grid>
    </Slide>
  );
}
