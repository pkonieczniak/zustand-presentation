import { Flex, Paper, Text, Title } from '@mantine/core';
import { useSportsContext } from './SportsContext/SportsContextProvider';
import { SportIcon } from './SportIcon';

export function ObservedEvents() {
  const { observedEvents } = useSportsContext();

  return (
    <Paper p="xl" radius="md">
      <Text c={'blue'}>Obserwowane</Text>
      {!observedEvents.length ? (
        <Title order={4}>Brak obserwowanych wydarzeń</Title>
      ) : (
        observedEvents.map(({ id, gameDate, teamLeft, teamRight, sportId }) => (
          <Flex key={id} direction={'column'} className="border" mt={'sm'}>
            <Text size="xs" c={'black'}>
              <SportIcon sportId={sportId} />
              {gameDate}
            </Text>
            <Text size="xs" c={'black'}>
              {teamLeft} - {teamRight}
            </Text>
          </Flex>
        ))
      )}
    </Paper>
  );
}
