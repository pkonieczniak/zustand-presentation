import { Flex, Paper, Image, Button, Skeleton } from '@mantine/core';
import { SportEventData } from '../types';
import { useSportsStore } from '../stores/sports-events.store';

export function SportsEvents() {
  const eventsLoading = useSportsStore((state) => state.eventsLoading);
  const events = useSportsStore((state) => state.events);

  return (
    <Skeleton visible={eventsLoading} style={{ marginTop: '10px' }}>
      {events.map((event) => (
        <SportEvent {...event} key={event.id} />
      ))}
    </Skeleton>
  );
}

function SportEvent(event: SportEventData) {
  const observedEvents = useSportsStore((state) => state.observedEvents);
  const addObservedEvent = useSportsStore((state) => state.addObservedEvent);
  const removeObservedEvent = useSportsStore(
    (state) => state.removeObservedEvent,
  );

  const isObserved = observedEvents.find(({ id }) => id === event.id);

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
          width: '15%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {event.tv}
      </span>
      <span style={{ width: '15%' }}>{event.gameDate}</span>
      <Flex gap={'xl'} align={'center'} flex={1}>
        <Image src={event.teamLeftLogo} width={'25px'} height={'25px'} />
        {event.teamLeft} - {event.teamRight}
        <Image src={event.teamRightLogo} width={'25px'} height={'25px'} />
      </Flex>
      <Button
        color={isObserved ? 'red' : 'blue'}
        style={{ marginLeft: 'auto', width: '250px' }}
        onClick={() => {
          return isObserved
            ? removeObservedEvent(event.id)
            : addObservedEvent(event);
        }}
      >
        <span>
          {isObserved ? 'Usuń z obserwowanych' : 'Dodaj do obserwowanych'}
        </span>
      </Button>
    </Flex>
  );
}
