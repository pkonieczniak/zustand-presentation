export enum LeagueId {
  PlusLiga,
  Tauronliga,
  Tauron1Liga,
}

export type GameWeek = number;

export interface FixtureData {
  id: string;
  tv: string;
  gameDate: string;
  teamLeft: string;
  teamLeftLogo: string;
  teamLeftResult: string;
  teamRight: string;
  teamRightLogo: string;
  teamRightResult: string;
}
