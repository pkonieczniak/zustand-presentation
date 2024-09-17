import { Appear, CodePane, Heading, Slide } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';
import { Grid, GridCol, Flex } from '@mantine/core';
import { IconX, IconCheck } from '@tabler/icons-react';

export function ContextUnnecessaryRerenders() {
  return (
    <Slide className="overflow-auto full-width-slide">
      <Heading>Nadmiarowe renderowanie komponentów</Heading>
      <Grid>
        <GridCol span={6}>
          <Appear>
            <Flex direction={'column'} align={'center'} gap={'md'} w={'100%'}>
              <IconX color="red" size={'2rem'} />
              <div style={{ width: '100%' }}>
                <CodePane
                  language="tsx"
                  theme={synthwave84}
                  highlightRanges={[
                    [6, 8],
                    [15, 15],
                  ]}
                >
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
          </Appear>
        </GridCol>
        <GridCol span={6}>
          <Appear>
            <Flex direction={'column'} align={'center'} gap={'md'}>
              <IconCheck color="green" size={'2rem'} />
              <div style={{ width: '100%' }}>
                <CodePane
                  language="tsx"
                  theme={synthwave84}
                  highlightRanges={[
                    [6, 6],
                    [13, 16],
                  ]}
                >
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
          </Appear>
        </GridCol>
      </Grid>
    </Slide>
  );
}
