import { FixtureData, LeagueId, GameWeek } from '../types';
import { plusLigaData } from '../data/plusliga';
import { firstLeagueData } from '../data/1liga';
import { tauronligaData } from '../data/tauronliga';
import { delay } from '../../tools/delay';

const fixtures: Record<LeagueId, Array<FixtureData[]>> = {
  [LeagueId.PlusLiga]: plusLigaData,
  [LeagueId.Tauronliga]: tauronligaData,
  [LeagueId.Tauron1Liga]: firstLeagueData,
};

export async function getFixtures(
  leagueId: LeagueId,
  gameWeek: GameWeek,
): Promise<{ fixtures: FixtureData[]; totalGameWeeks: number }> {
  await delay(500);

  const leagueFixtures = fixtures[leagueId];

  return {
    fixtures: leagueFixtures[gameWeek] as FixtureData[],
    totalGameWeeks: leagueFixtures.length,
  };
}
