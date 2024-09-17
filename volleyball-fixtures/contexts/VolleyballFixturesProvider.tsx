import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LeagueId, GameWeek, FixtureData } from '../types';
import { getFixtures } from '../api/getFixtures';
import dayjs from '../../tools/dayjs';

export const VolleyballFixturesContext = createContext<{
  selectedLeague: LeagueId;
  selectedGameWeek: GameWeek;
  fixtures: FixtureData[];
  totalGameWeeks: number;
  fixturesLoading: boolean;
  observedFixtures: FixtureData[];
  changeLeague: (leagueId: LeagueId) => void;
  changeGameWeek: (gameWeek: GameWeek) => void;
  addObservedFixture: (event: FixtureData) => void;
  removeObservedFixture: (id: FixtureData['id']) => void;
} | null>(null);

export const VolleyballFixturesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedLeague, setSelectedLeague] = useState<LeagueId>(
    LeagueId.PlusLiga,
  );
  const [selectedGameWeek, setSelectedGameWeek] = useState<GameWeek>(0);
  const [fixtures, setEvents] = useState<FixtureData[]>([]);
  const [totalGameWeeks, setTotalGameWeeks] = useState<number>(0);
  const [fixturesLoading, setFixturesLoading] = useState(true);
  const [observedFixtures, setObservedEvents] = useState<FixtureData[]>([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      setFixturesLoading(true);
      const { fixtures, totalGameWeeks } = await getFixtures(
        selectedLeague,
        selectedGameWeek,
      );
      setEvents(fixtures);
      setTotalGameWeeks(totalGameWeeks);
      setFixturesLoading(false);
    };

    fetchFixtures();
  }, [selectedLeague, selectedGameWeek]);

  const changeLeague = useCallback((leagueId: LeagueId) => {
    setSelectedLeague(leagueId);
  }, []);

  const changeGameWeek = useCallback((gameWeek: GameWeek) => {
    setSelectedGameWeek(gameWeek);
  }, []);

  const addObservedFixture = useCallback((event: FixtureData) => {
    setObservedEvents((prev) => {
      const fixtures = [...prev, event];
      return fixtures.sort((event1, event2) => {
        const format = 'DD.MM.YYYY, HH:mm';
        return (
          dayjs(event1.gameDate, format).unix() -
          dayjs(event2.gameDate, format).unix()
        );
      });
    });
  }, []);

  const removeObservedFixture = useCallback((eventId: FixtureData['id']) => {
    setObservedEvents((prev) => prev.filter(({ id }) => id !== eventId));
  }, []);

  return (
    <VolleyballFixturesContext.Provider
      value={{
        fixtures,
        fixturesLoading,
        observedFixtures,
        selectedLeague,
        selectedGameWeek,
        totalGameWeeks,
        changeLeague,
        changeGameWeek,
        addObservedFixture,
        removeObservedFixture,
      }}
    >
      {children}
    </VolleyballFixturesContext.Provider>
  );
};

export function useVolleyballFixtures() {
  const context = useContext(VolleyballFixturesContext);
  if (!context) {
    throw new Error(
      'Cannot use VolleyballFixtures - missing VolleyballFixturesProvider',
    );
  }
  return context;
}
