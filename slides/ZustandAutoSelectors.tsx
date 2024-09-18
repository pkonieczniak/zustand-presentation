import { Flex } from '@mantine/core';
import {
  Heading,
  Slide,
  Image,
  Text,
  CodePane,
  Appear,
  ListItem,
  UnorderedList,
} from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function ZustandAutoSelectors() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Zustand autoselectors</Heading>
        <Appear>
          <div>
            <CodePane language="tsx" theme={synthwave84}>
              {`
              export const useVolleyballFixturesStore = create<VolleyballFixturesStore>(
                (set, get) => ({              
                  fetchFixtures: async () => {
                    set({ fixturesLoading: true }); // set({ ...state, fixturesLoading: true})
                    const { fixtures, totalGameWeeks } = await getFixtures(
                      get().selectedLeague,
                      get().selectedGameWeek,
                    );
                    set({ fixtures, totalGameWeeks, fixturesLoading: false });
                  },
                  changeLeague: (leagueId) => set({ selectedLeague: leagueId, selectedGameWeek: 0 })              
                })
              )                  
              
              export function VolleyballFixturesSearch() {
                const fetchFixtures = useVolleyballFixturesStore((state) => state.fetchFixtures);
                return (
                  //...
                  <Button onClick={() => fetchFixtures()}/>
                  //...

                )
              }
              `}
            </CodePane>
          </div>
        </Appear>
      </Flex>
    </Slide>
  );
}
