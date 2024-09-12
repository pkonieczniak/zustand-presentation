export enum SportId {
  Soccer,
  Volleyball,
}

export interface SportEvent {
  teamLeft: string;
  teamLeftLogo: string;
  teamRightLogo: string;
  teamRight: string;
  tv: string;
  gameDate: string;
}
