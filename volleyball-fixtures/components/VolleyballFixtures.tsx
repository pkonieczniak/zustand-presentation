import { Flex, Paper, Image, Button, Skeleton } from '@mantine/core';
import { FixtureData } from '../types';
import { useVolleyballFixtures } from '../stores/volleyball-fixtures.store';

export function VolleyballFixtures() {
  const fixturesLoading = useVolleyballFixtures(
    (state) => state.fixturesLoading,
  );
  const fixtures = useVolleyballFixtures((state) => state.fixtures);

  return (
    <Skeleton visible={fixturesLoading} style={{ marginTop: '10px' }}>
      {fixtures.map((event) => (
        <VolleyballGame {...event} key={event.id} />
      ))}
    </Skeleton>
  );
}

function VolleyballGame(event: FixtureData) {
  const observedFixtures = useVolleyballFixtures(
    (state) => state.observedFixtures,
  );
  const addObservedFixture = useVolleyballFixtures(
    (state) => state.addObservedFixture,
  );
  const removeObservedFixture = useVolleyballFixtures(
    (state) => state.removeObservedFixture,
  );

  const isObserved = observedFixtures.find(({ id }) => id === event.id);

  return (
    <Flex
      id={`${event.teamLeft}-${event.teamRight}`}
      component={Paper}
      align={'center'}
      style={{
        marginTop: '16px',
        marginBottom: '16px',
        color: 'black',
        padding: '8px',
        width: '100%',
      }}
      columnGap={'xl'}
    >
      <span
        style={{
          width: '12%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {event.tv}
      </span>
      <span style={{ width: '10%' }}>{event.gameDate}</span>
      <Flex gap={'xl'} align={'center'} flex={1}>
        <Image src={event.teamLeftLogo} width={'25px'} height={'25px'} />
        {event.teamLeft} {event.teamLeftResult} - {event.teamRightResult}{' '}
        {event.teamRight}
        <Image src={event.teamRightLogo} width={'25px'} height={'25px'} />
      </Flex>
      <Button
        color={isObserved ? 'red' : 'blue'}
        style={{ marginLeft: 'auto', width: '250px' }}
        onClick={() => {
          return isObserved
            ? removeObservedFixture(event.id)
            : addObservedFixture(event);
        }}
      >
        <span>
          {isObserved ? 'Usuń z obserwowanych' : 'Dodaj do obserwowanych'}
        </span>
      </Button>
    </Flex>
  );
}
