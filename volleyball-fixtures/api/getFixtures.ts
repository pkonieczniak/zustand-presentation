import { FixtureData, LeagueId, GameWeek } from '../types';
import { plusLigaData } from '../data/plusliga';
import { firstLeagueData } from '../data/1liga';
import { tauronligaData } from '../data/tauronliga';

export async function getFixtures(
  leagueId: LeagueId,
  gameWeek: GameWeek,
): Promise<FixtureData[]> {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(500);

  let fixture;

  switch (leagueId) {
    case LeagueId.PlusLiga:
      fixture = plusLigaData;
      break;
    case LeagueId.Tauronliga:
      fixture = tauronligaData;
      break;
    case LeagueId.Tauron1Liga:
      fixture = firstLeagueData;
      break;
  }

  return fixture[gameWeek] as FixtureData[];
}
