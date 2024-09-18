import { create } from 'zustand';
import { shallow } from 'zustand/shallow';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
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

export const useVolleyballFixturesStore = create(
  subscribeWithSelector(
    devtools<VolleyballFixturesStore>((set, get) => ({
      fixtures: [],
      totalGameWeeks: 0,
      fixturesLoading: true,
      selectedLeague: LeagueId.PlusLiga,
      selectedGameWeek: 0,
      observedFixtures: [],
      fetchFixtures: async () => {
        set({ fixturesLoading: true }, false, 'fixtures/fetchFixturesLoading');
        const { fixtures, totalGameWeeks } = await getFixtures(
          get().selectedLeague,
          get().selectedGameWeek,
        );
        set(
          { fixtures, totalGameWeeks, fixturesLoading: false },
          false,
          'fixtures/fetchFixturesDone',
        );
      },
      addObservedFixture: event => {
        return set(
          {
            observedFixtures: [...get().observedFixtures, event].sort(
              (event1, event2) => {
                const format = 'DD.MM.YYYY, HH:mm';
                return (
                  dayjs(event1.gameDate, format).unix() -
                  dayjs(event2.gameDate, format).unix()
                );
              },
            ),
          },
          false,
          'fixtures/addObservedFixture',
        );
      },
      changeLeague: leagueId =>
        set(
          { selectedLeague: leagueId, selectedGameWeek: 0 },
          false,
          'fixtures/changeLeague',
        ),
      changeGameWeek: round =>
        set({ selectedGameWeek: round }, false, 'fixtures/changeGameWeek'),
      removeObservedFixture: eventId => {
        const { observedFixtures } = get();
        set(
          {
            observedFixtures: observedFixtures.filter(
              event => event.id !== eventId,
            ),
          },
          false,
          'fixtures/removeObservedEvent',
        );
      },
    })),
  ),
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

// Transient updates (optimize re-renders)
// export const useFetchVolleyballFixtures = () => {
//   useEffect(
//     () =>
//       useVolleyballFixturesStore.subscribe(
//         state => [state.selectedLeague, state.selectedGameWeek],
//         () => {
//           useVolleyballFixturesStore.getState().fetchFixtures();
//         },
//         { fireImmediately: true, equalityFn: shallow },
//       ),
//     [],
//   );
// };
