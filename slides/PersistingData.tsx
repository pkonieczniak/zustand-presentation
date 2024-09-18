import { Flex, Grid, GridCol } from '@mantine/core';
import { Heading, Slide, CodePane, Appear } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function PersistingData() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Persisting store data</Heading>
        <Appear>
          <CodePane language="tsx" theme={synthwave84}>
            {`
              import { devtools, subscribeWithSelector, persist } from 'zustand/middleware';
              
              export const useVolleyballFixturesStore = create(
                subscribeWithSelector(
                  persist(
                    devtools<VolleyballFixturesStore>((set, get) => ({ 
                      fixtures: [],
                      totalGameWeeks: 0,
                      fixturesLoading: true,
                      selectedLeague: LeagueId.PlusLiga,
                      selectedGameWeek: 0,
                      observedFixtures: [],
                      fetchFixtures: async () => {
                        set({ fixturesLoading: true }, false, 'fixtures/fetchFixturesLoading');
                        const { fixtures, totalGameWeeks } = await getFixtures(
                          get().selectedLeague,
                          get().selectedGameWeek,
                        );
                        set(
                          { fixtures, totalGameWeeks, fixturesLoading: false },
                          false,
                          'fixtures/fetchFixturesDone',
                        );
                        //...
                      },     
                })),
                {
                  name: 'volleyball-store',
                  partialize: state => ({ observedFixtures: state.observedFixtures })
                },                
              ),
            )             
            `}
          </CodePane>
        </Appear>
      </Flex>
    </Slide>
  );
}
