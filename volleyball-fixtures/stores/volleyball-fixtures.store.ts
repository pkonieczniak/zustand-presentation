import { create } from 'zustand';
import { FixtureData, LeagueId, GameWeek } from '../types';
import dayjs from 'dayjs';
import { getFixtures } from '../api/getFixtures';
import { useEffect } from 'react';

interface VolleyballFixturesState {
  selectedLeague: LeagueId;
  selectedGameWeek: GameWeek;
  fixtures: FixtureData[];
  totalGameWeeks: number;
  fixturesLoading: boolean;
  observedFixtures: FixtureData[];
}

interface VolleyballFixturesActions {
  fetchFixtures: () => Promise<void>;
  changeLeague: (leagueId: LeagueId) => void;
  changeGameWeek: (round: GameWeek) => void;
  addObservedFixture: (event: FixtureData) => void;
  removeObservedFixture: (id: FixtureData['id']) => void;
}

type VolleyballFixturesStore = VolleyballFixturesState &
  VolleyballFixturesActions;

export const useVolleyballFixturesStore = create<VolleyballFixturesStore>(
  (set, get) => ({
    fixtures: [],
    totalGameWeeks: 0,
    fixturesLoading: true,
    selectedLeague: LeagueId.PlusLiga,
    selectedGameWeek: 0,
    observedFixtures: [],
    fetchFixtures: async () => {
      set({ fixturesLoading: true });
      const { fixtures, totalGameWeeks } = await getFixtures(
        get().selectedLeague,
        get().selectedGameWeek,
      );
      set({ fixtures, totalGameWeeks, fixturesLoading: false });
    },
    addObservedFixture: event => {
      return set({
        observedFixtures: [...get().observedFixtures, event].sort(
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
    changeLeague: leagueId =>
      set({ selectedLeague: leagueId, selectedGameWeek: 0 }),
    changeGameWeek: round => set({ selectedGameWeek: round }),
    removeObservedFixture: eventId => {
      const { observedFixtures } = get();
      set({
        observedFixtures: observedFixtures.filter(
          event => event.id !== eventId,
        ),
      });
    },
  }),
);

export const useFetchVolleyballFixtures = () => {
  const selectedLeague = useVolleyballFixturesStore(
    state => state.selectedLeague,
  );
  const selectedGameWeek = useVolleyballFixturesStore(
    state => state.selectedGameWeek,
  );
  const fetchFixtures = useVolleyballFixturesStore(
    state => state.fetchFixtures,
  );
  useEffect(() => {
    fetchFixtures();
  }, [selectedLeague, selectedGameWeek]);
};
