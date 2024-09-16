import { Flex, Paper, Text, Title } from '@mantine/core';
import { SportsEventsIcon } from './SportsEventsIcon';
import { useSportsStore } from '../stores/sports-events.store';

export function SportsEventsFollowed() {
  const observedEvents = useSportsStore((state) => state.observedEvents);

  return (
    <Paper p="xl" radius="md">
      <Text c={'blue'}>Obserwowane</Text>
      {!observedEvents.length ? (
        <Title order={4}>Brak obserwowanych wydarzeń</Title>
      ) : (
        observedEvents.map(({ id, gameDate, teamLeft, teamRight, sportId }) => (
          <Flex key={id} direction={'column'} className="border" mt={'sm'}>
            <Text size="xs" c={'black'}>
              <SportsEventsIcon sportId={sportId} />
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
