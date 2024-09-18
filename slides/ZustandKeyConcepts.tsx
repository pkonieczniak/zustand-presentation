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

export function ZustandKeyConceptsStore() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Zustand podstawy</Heading>
        <Text>
          <strong>Store to hook</strong>
        </Text>
        <Appear>
          <div>
            <CodePane language="tsx" theme={synthwave84}>
              {`
                interface VolleyballFixturesState {
                  selectedLeague: LeagueId;
                  fixtures: FixtureData[];
                }

                interface VolleyballFixturesActions {
                  changeLeague: (leagueId: LeagueId) => void;
                  fetchFixtures: () => Promise<void>;
                }

                type VolleyballFixturesStore = VolleyballFixturesState & VolleyballFixturesActions;              
              
                export const useVolleyballFixtures = create<VolleyballFixturesStore>(
                  (set, get) => ({
                    fixtures: [],
                    selectedLeague: LeagueId.PlusLiga,
                    changeLeague: (leagueId) => set({ selectedLeague: leagueId }),
                    fetchFixtures: async () => {
                      // Implementacja
                    },
                  }),
                );

                `}
            </CodePane>
          </div>
        </Appear>
      </Flex>
    </Slide>
  );
}
