import { Appear, CodePane, Heading, Slide } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';
import { Grid, GridCol, Flex } from '@mantine/core';
import { IconX, IconCheck } from '@tabler/icons-react';

export function UnsafeDefaultValues() {
  return (
    <Slide className="overflow-auto full-width-slide">
      <Heading>Niebezpieczne domyślne wartości</Heading>
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
                    [6, 7],
                    [14, 16],
                    [24, 26],
                  ]}
                >
                  {`
                    function VolleyballFixturesProvider () {
                      export const VolleyballFixturesContext = createContext<{
                        selectedLeague: LeagueId;
                        changeLeague: (leagueId: LeagueId) => void;
                      }>({
                        selectedLeague: LeagueId.PlusLiga,  
                        changeLeague: (leagueId: number) => null
                      });
                    }
                    
                    function App () {
                      return (
                        <>
                          <VolleyballFixturesProvider>
                            <VolleyballFixtures />
                          </VolleyballFixturesProvider>
                          <VolleyballFixturesSearch />
                        </>
                      )
                    }  
                    
                    function VolleyballFixturesSearch () {
                      const { 
                        selectedLeague, 
                        changeLeague 
                      } = useContext(VolleyballFixturesContext)
                      
                      return (
                        <Select 
                          value={selectedLeague} 
                          onChange=(value => changeLeague(value))
                        />
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
                    [5, 5],
                    [8, 14],
                    [28, 31],
                  ]}
                >
                  {`
                    function VolleyballFixturesProvider () {
                      export const VolleyballFixturesContext = createContext<{
                        selectedLeague: LeagueId;
                        changeLeague: (leagueId: LeagueId) => void;
                      }>(null);
                    }
                    
                    export function useVolleyballFixturesContext() {
                      const context = useContext(VolleyballFixtures);
                      if (!context) {
                        throw new Error('Missing VolleyballFixturesProvider');
                      }
                      return context;
                    }

                    function App () {
                      return (
                        <>
                          <VolleyballFixturesProvider>
                            <VolleyballFixtures />
                          </VolleyballFixturesProvider>
                          <VolleyballFixturesSearch />
                        </>
                      )
                    }  
                    
                    function VolleyballFixturesSearch () {
                      const { 
                        selectedLeague, 
                        changeLeague 
                      } = useVolleyballFixturesContext()
                      
                      return (
                        <Select 
                          value={selectedLeague} 
                          onChange=(value => changeLeague(value))
                        />
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
