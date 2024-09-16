import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SportEventData, SportId, SportNews } from '../types';
import { getSportEvents } from '../api/getSportEvents';
import { getSportNews } from '../api/getSportNews';
import dayjs from '../../tools/dayjs';

export const SportsEventsContext = createContext<{
  events: SportEventData[];
  eventsLoading: boolean;
  news: SportNews[];
  newsLoading: boolean;
  observedEvents: SportEventData[];
  selectedSportId: SportId;
  changeSport: (sportId: SportId) => void;
  addObservedEvent: (event: SportEventData) => void;
  removeObservedEvent: (id: SportEventData['id']) => void;
} | null>(null);

export const SportsEventsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedSportId, setSelectedSportId] = useState<SportId>(
    SportId.Volleyball,
  );
  const [events, setEvents] = useState<SportEventData[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [news, setNews] = useState<SportNews[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [observedEvents, setObservedEvents] = useState<SportEventData[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setEventsLoading(true);
      const events = await getSportEvents(selectedSportId);
      setEvents(events);
      setEventsLoading(false);
    };

    const fetchNews = async () => {
      setNewsLoading(true);
      const news = await getSportNews(selectedSportId);
      setNews(news);
      setNewsLoading(false);
    };

    fetchEvents();
    fetchNews();
  }, [selectedSportId]);

  const changeSport = useCallback((sportId: number) => {
    setSelectedSportId(sportId);
  }, []);

  const addObservedEvent = useCallback((event: SportEventData) => {
    setObservedEvents((prev) => {
      const events = [...prev, event];
      return events.sort((event1, event2) => {
        const format = 'DD.MM.YYYY, HH:mm';
        return (
          dayjs(event1.gameDate, format).unix() -
          dayjs(event2.gameDate, format).unix()
        );
      });
    });
  }, []);

  const removeObservedEvent = useCallback((eventId: SportEventData['id']) => {
    setObservedEvents((prev) => prev.filter(({ id }) => id !== eventId));
  }, []);

  return (
    <SportsEventsContext.Provider
      value={{
        events,
        eventsLoading,
        observedEvents,
        selectedSportId,
        news,
        newsLoading,
        changeSport,
        addObservedEvent,
        removeObservedEvent,
      }}
    >
      {children}
    </SportsEventsContext.Provider>
  );
};

export function useSportsEventsContext() {
  const context = useContext(SportsEventsContext);
  if (!context) {
    throw new Error('Cannot use SportsEventsContext - missing SportsProvider');
  }
  return context;
}
