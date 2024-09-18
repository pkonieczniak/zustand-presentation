import { Flex, Grid, GridCol } from '@mantine/core';
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

export function ReadWriteOutsideStore() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Odczyt i zapis poza komponentami, hookami</Heading>
        <Appear>
          <Grid style={{ position: 'relative', top: '-50px' }}>
            <GridCol span={6}>
              <Flex direction={'column'} align={'center'} gap={'md'} w={'100%'}>
                <div style={{ width: '100%' }}>
                  <CodePane language="tsx" theme={synthwave84}>
                    {`
                      import { 
                        useVolleyballFixturesStore 
                    } from './store/volleyball-fixture-store';
                      function logger () {
                        // non reactive state
                        const state = useVolleyballFixturesStore.getState()
                        console.log(JSON.stringify(state, null, 2))
                      }
                  `}
                  </CodePane>
                </div>
              </Flex>
            </GridCol>
            <GridCol span={6}>
              <Flex direction={'column'} align={'center'} gap={'md'}>
                <div style={{ width: '100%' }}>
                  <CodePane language="tsx" theme={synthwave84}>
                    {`
                      import { 
                        useVolleyballFixturesStore 
                    } from './store/volleyball-fixture-store';

                      ///https://zustand.docs.pmnd.rs/guides/practice-with-no-store-actions
                      function fetchFixtures () {
                        const state = useVolleyballFixturesStore.getState()
                        
                        useVolleyballFixturesStore.setState(
                          { fixturesLoading: true },
                        );
                        
                        const { fixtures, totalGameWeeks } = await getFixtures(
                          state.selectedLeague,
                          state.selectedGameWeek,
                        );
                        
                        useVolleyballFixturesStore.set(
                          { fixtures, totalGameWeeks, fixturesLoading: false },
                        );                        
                      }
                  `}
                  </CodePane>
                </div>
              </Flex>
            </GridCol>
          </Grid>
        </Appear>
      </Flex>
    </Slide>
  );
}
