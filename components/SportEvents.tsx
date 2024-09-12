import { Skeleton } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getEvents } from '../api/getEvents';
import { SportEvent } from './SportEvent';
import { SportEventData } from '../types';

export function SportEvents({ sportId }: { sportId: number }) {
  const [events, setEvents] = useState<SportEventData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const events = await getEvents(sportId);
      setEvents(events);
      setIsLoading(false);
    };
    void fetchEvents();
  }, [sportId]);

  return (
    <Skeleton visible={isLoading}>
      {events.map((event) => (
        <SportEvent {...event} />
      ))}
    </Skeleton>
  );
}
