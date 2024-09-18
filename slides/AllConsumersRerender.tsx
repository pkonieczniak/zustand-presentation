import { Appear, CodePane, Heading, Slide } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function AllConsumersRerender() {
  return (
    <Slide className="overflow-auto">
      <Heading>Renderowanie wszystkich konsumentów</Heading>
      <CodePane language="tsx" theme={synthwave84}>
        {`
          function App () {
            return (
              <VolleyballFixturesProvider>
                <VolleyballFixtures />  // const { fixtures } = useFixturesContext();
                <VolleyballFixturesFollowed /> // const { followedFixtures } = useFixturesContext();
                <FetchMoreButton /> // pobiera więcej meczów
              </VolleyballFixturesProvider>
            )
          }
        `}
      </CodePane>
    </Slide>
  );
}
