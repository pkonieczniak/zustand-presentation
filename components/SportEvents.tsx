import { Button, Flex, Image, Paper } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getEvents } from '../api/getEvents';
import { SportEvent, SportId } from '../types';

export function SportEvents({ sportId }: { sportId: number }) {
  const [events, setEvents] = useState<SportEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents(sportId);
      setEvents(events);
    };
    void fetchEvents();
  }, []);

  return (
    <>
      {events.map((event) => {
        return (
          <Flex
            id={`${event.teamLeft}-${event.teamRight}`}
            component={Paper}
            align={'center'}
            style={{
              margin: '16px',
              color: 'black',
              padding: '8px',
              maxWidth: '1200px',
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
            <Flex gap={'xl'} align={'center'}>
              <Image src={event.teamLeftLogo} width={'50px'} height={'50px'} />
              {event.teamLeft} - {event.teamRight}
              <Image src={event.teamRightLogo} width={'50px'} height={'50px'} />
            </Flex>
            <Button style={{ marginLeft: 'auto' }}>Szczegóły</Button>
          </Flex>
        );
      })}
    </>
  );
}
