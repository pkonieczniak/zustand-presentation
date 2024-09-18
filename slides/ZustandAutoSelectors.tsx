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

export function ZustandAutoSelectors() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Zustand autoselectors</Heading>
        <Appear>
          <Grid style={{ position: 'relative', top: '-50px' }}>
            <GridCol span={5}>
              <Flex direction={'column'} align={'center'} gap={'md'} w={'100%'}>
                <div style={{ width: '100%' }}>
                  <CodePane language="tsx" theme={synthwave84}>
                    {`
                      const selectedLeague = useVolleyballFixturesStore(
                        state => state.selectedLeague,
                      );
                      const selectedGameWeek = useVolleyballFixturesStore(
                        state => state.selectedGameWeek,
                      );
                      const fetchFixtures = useVolleyballFixturesStore(
                        state => state.fetchFixtures,
                      );
                      useEffect(() => {
                        fetchFixtures();
                      }, [selectedLeague, selectedGameWeek]); 
                  `}
                  </CodePane>
                </div>
              </Flex>
            </GridCol>
            <GridCol span={7}>
              <Flex direction={'column'} align={'center'} gap={'md'}>
                <div style={{ width: '100%' }}>
                  <CodePane language="tsx" theme={synthwave84}>
                    {`
                      const selectedLeague = useVolleyballFixturesStore.use.selectedLeague();
                      const selectedGameWeek = useVolleyballFixturesStore.use.selectedGameWeek();
                      const fetchFixtures = useVolleyballFixturesStore.use.fetchFixtures();
                      useEffect(() => {
                        fetchFixtures();
                      }, [selectedLeague, selectedGameWeek]); 
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
