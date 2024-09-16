export enum SportId {
  Soccer,
  Volleyball,
}

export interface SportEventData {
  id: number;
  sportId: SportId;
  teamLeft: string;
  teamLeftLogo: string;
  teamRightLogo: string;
  teamRight: string;
  tv: string;
  gameDate: string;
}

export interface SportNews {
  sportId: SportId;
  text: string;
}
