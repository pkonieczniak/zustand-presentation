import { Flex } from '@mantine/core';
import { Heading, Slide, CodePane, Appear } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function CreateSelectorsImpl() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Zustand autoselectors</Heading>
        <Appear>
          <CodePane language="tsx" theme={synthwave84}>
            {`
              const useVolleyballFixturesStoreBase = create<VolleyballFixturesStore>(
                (set, get) => ({
                  fixtures: [],
                  totalGameWeeks: 0,
                  fixturesLoading: true,
                  //....
              };

              export const useVolleyballFixturesStore = createSelectors(
                useVolleyballFixturesStoreBase,
              );

              export const useFetchVolleyballFixtures = () => {
                const selectedLeague = useVolleyballFixturesStore.use.selectedLeague();
                const selectedGameWeek = useVolleyballFixturesStore.use.selectedGameWeek();
                const fetchFixtures = useVolleyballFixturesStore.use.fetchFixtures();
                useEffect(() => {
                  fetchFixtures();
                }, [selectedLeague, selectedGameWeek]);
              };
            `}
          </CodePane>
        </Appear>
      </Flex>
    </Slide>
  );
}
