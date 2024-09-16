import { Flex, Paper, Text, Title } from '@mantine/core';
import { VolleyballFixturesIcon } from './VolleyballFixturesIcon';
import { useVolleyballFixtures } from '../contexts/VolleyballFixturesProvider';

export function VolleyballFixturesFollowed() {
  const { observedFixtures } = useVolleyballFixtures();

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
