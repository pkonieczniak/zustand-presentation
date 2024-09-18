import { Flex, Paper, Text, Title } from '@mantine/core';
import { VolleyballFixturesIcon } from './VolleyballFixturesIcon';
import { useVolleyballFixturesStore } from '../stores/volleyball-fixtures.store';

export function VolleyballFixturesFollowed() {
  const observedFixtures = useVolleyballFixturesStore(
    state => state.observedFixtures,
  );

  return (
    <Paper p="xl" radius="md">
      <Text c={'blue'}>Obserwowane</Text>
      {!observedFixtures.length ? (
        <Title order={4}>Brak obserwowanych wydarzeń</Title>
      ) : (
        observedFixtures.map(({ id, gameDate, teamLeft, teamRight }) => (
          <Flex key={id} direction={'column'} className="border" mt={'sm'}>
            <Text size="xs" c={'black'}>
              <VolleyballFixturesIcon />
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
