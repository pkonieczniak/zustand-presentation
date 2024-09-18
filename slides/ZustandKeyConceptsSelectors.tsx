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

export function ZustandKeyConceptsStoreSelectors() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Zustand podstawy</Heading>
        <Text>
          <strong>Selektory - Atomic state picks</strong>
        </Text>
        <Appear>
          <div>
            <CodePane language="tsx" theme={synthwave84}>
              {`
                import { useVolleyballFixturesStore } from '../stores/volleyball-fixtures.store'

                export function VolleyballFixturesFollowed() {
                  const observedFixtures = useVolleyballFixturesStore((state) => state.observedFixtures);
                  return (
                    <Title>Obserwujesz \${observedFixtures.length} spotkań</Title>
                  )
                }

                export function VolleyballFixturesSearch() {
                  // Nasłuchiwanie na cały store
                  // const store = useVolleyballFixturesStore() 
                  // const { selectedLeague } = useVolleyballFixturesStore() 
                  const selectedLeague = useVolleyballFixturesStore((state) => state.selectedLeague);
                  const selectedGameWeek = useVolleyballFixturesStore((state) => state.selectedGameWeek);
                  const totalGameWeeks = useVolleyballFixturesStore((state) => state.totalGameWeeks);
                  const changeLeague = useVolleyballFixturesStore((state) => state.changeLeague);
                  const changeGameWeek = useVolleyballFixturesStore((state) => state.changeGameWeek);

                  return (
                   //....
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
