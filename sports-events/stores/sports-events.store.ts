import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { SportEventData, SportNews, SportId } from '../types';
import dayjs from 'dayjs';
import { getSportEvents } from '../api/getSportEvents';
import { getSportNews } from '../api/getSportNews';
import { useEffect } from 'react';

interface SportsStoreState {
  events: SportEventData[];
  eventsLoading: boolean;
  news: SportNews[];
  newsLoading: boolean;
  observedEvents: SportEventData[];
  selectedSportId: SportId;
}

interface SportsStoreActions {
  fetchEvents: () => Promise<void>;
  fetchNews: () => Promise<void>;
  changeSport: (sportId: SportId) => void;
  addObservedEvent: (event: SportEventData) => void;
  removeObservedEvent: (id: SportEventData['id']) => void;
}

export const useSportsStore = create(
  subscribeWithSelector<SportsStoreState & SportsStoreActions>((set, get) => ({
    events: [],
    eventsLoading: true,
    news: [],
    newsLoading: true,
    observedEvents: [],
    selectedSportId: SportId.Volleyball,
    fetchEvents: async () => {
      set({ eventsLoading: true });
      const events = await getSportEvents(get().selectedSportId);
      set({ events, eventsLoading: false });
    },
    fetchNews: async () => {
      set({ newsLoading: true });
      const news = await getSportNews(get().selectedSportId);
      set({ news, newsLoading: false });
    },
    addObservedEvent: (event) => {
      return set({
        observedEvents: [...get().observedEvents, event].sort(
          (event1, event2) => {
            const format = 'DD.MM.YYYY, HH:mm';
            return (
              dayjs(event1.gameDate, format).unix() -
              dayjs(event2.gameDate, format).unix()
            );
          },
        ),
      });
    },
    changeSport: (sportId) => set({ selectedSportId: sportId }),
    removeObservedEvent: (eventId) => {
      const { observedEvents } = get();
      set({
        observedEvents: observedEvents.filter((event) => event.id !== eventId),
      });
    },
  })),
);

export const useFetchSportsData = () => {
  const selectedSportId = useSportsStore((state) => state.selectedSportId);
  const fetchEvents = useSportsStore((state) => state.fetchEvents);
  const fetchNews = useSportsStore((state) => state.fetchNews);
  useEffect(() => {
    fetchEvents();
    fetchNews();
  }, [selectedSportId]);
};

// Transient updates (for often occurring state-changes)
// export const useFetchSportsData = () => {
//   useEffect(
//     () =>
//       useSportsStore.subscribe(
//         (state) => state.selectedSportId,
//         () => {
//           useSportsStore.getState().fetchEvents();
//           useSportsStore.getState().fetchNews();
//         },
//         { fireImmediately: true },
//       ),
//     [],
//   );
// };
