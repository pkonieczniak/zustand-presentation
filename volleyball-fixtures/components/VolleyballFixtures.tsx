import {
  Flex,
  Paper,
  Image,
  Button,
  Skeleton,
  Text,
  isNumberLike,
} from '@mantine/core';
import { FixtureData } from '../types';
import { useVolleyballFixturesStore } from '../stores/volleyball-fixtures.store';
import { IconScreenShareOff } from '@tabler/icons-react';

export function VolleyballFixtures() {
  const fixturesLoading = useVolleyballFixturesStore(
    state => state.fixturesLoading,
  );
  const fixtures = useVolleyballFixturesStore(state => state.fixtures);

  return (
    <Skeleton visible={fixturesLoading} style={{ marginTop: '10px' }}>
      {fixtures.map(event => (
        <VolleyballGame {...event} key={event.id} />
      ))}
    </Skeleton>
  );
}

function VolleyballGame(event: FixtureData) {
  const observedFixtures = useVolleyballFixturesStore(
    state => state.observedFixtures,
  );
  const addObservedFixture = useVolleyballFixturesStore(
    state => state.addObservedFixture,
  );
  const removeObservedFixture = useVolleyballFixturesStore(
    state => state.removeObservedFixture,
  );

  const isObserved = observedFixtures.find(({ id }) => id === event.id);

  return (
    <Flex
      id={`${event.teamLeft}-${event.teamRight}`}
      component={Paper}
      align={'center'}
      wrap={'wrap'}
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
          width: '13%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {event.tv ?? <IconScreenShareOff />}
      </span>
      <span style={{ width: '15%' }}>{event.gameDate}</span>
      <Flex gap={'xl'} align={'center'} flex={3}>
        <Image src={event.teamLeftLogo} width={'25px'} height={'25px'} />
        <Flex align={'center'} gap={'sm'}>
          <span>{event.teamLeft}</span>
          <ResultBox
            teamLeftResult={event.teamLeftResult}
            teamRightResult={event.teamRightResult}
          />
          {event.teamRight}
        </Flex>
        <Image src={event.teamRightLogo} width={'25px'} height={'25px'} />
      </Flex>
      <Button
        color={isObserved ? 'red' : 'blue'}
        size="sm"
        style={{ marginLeft: 'auto', width: 'fit-content' }}
        onClick={() => {
          return isObserved
            ? removeObservedFixture(event.id)
            : addObservedFixture(event);
        }}
      >
        {isObserved ? 'Nie obserwuj' : 'Obserwuj'}
      </Button>
    </Flex>
  );
}

function ResultBox({
  teamLeftResult,
  teamRightResult,
}: {
  teamLeftResult: string;
  teamRightResult: string;
}) {
  const isResultValid =
    isNumberLike(teamLeftResult) && isNumberLike(teamRightResult);

  return (
    <Flex gap={'sm'}>
      <Text
        ta={'center'}
        size="xl"
        fw={'bold'}
        w={'2rem'}
        h={'2rem'}
        style={{ borderRadius: '10%' }}
        bg={
          !isResultValid
            ? 'gray'
            : teamLeftResult > teamRightResult
              ? 'green'
              : 'red'
        }
      >
        {teamLeftResult}
      </Text>
      <Text size="xl" fw={'bold'}>
        -
      </Text>
      <Text
        ta={'center'}
        size="xl"
        fw={'bold'}
        w={'2rem'}
        h={'2rem'}
        style={{ borderRadius: '10%' }}
        bg={
          !isResultValid
            ? 'gray'
            : teamRightResult > teamLeftResult
              ? 'green'
              : 'red'
        }
      >
        {teamRightResult}
      </Text>
    </Flex>
  );
}
