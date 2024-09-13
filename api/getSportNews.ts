import { SportId, SportNews } from '../components/sports-event/types';

const volleyballNews: SportNews[] = [
  {
    sportId: SportId.Volleyball,
    text: 'Wypełniamy katowicki Spodek! Mamy bilety na wyjątkowy mecz o AL-KO Superpuchar Polski siatkarzy!',
  },
  {
    sportId: SportId.Volleyball,
    text: 'Wraca PlusLiga! Po 138 dniach przerwy znów będziemy emocjonować się najlepszymi rozgrywkami w Europie',
  },
];
const soccerNews: SportNews[] = [
  {
    sportId: SportId.Soccer,
    text: 'Wielki powrót Ligi Mistrzów! Czas na emocje, których nie zapomnisz – bądź częścią widowiska!',
  },
  {
    sportId: SportId.Soccer,
    text: 'Derby już blisko! Walka o prymat w mieście – zarezerwuj bilety na ten wyjątkowy mecz!',
  },
];

export async function getSportNews(sportId: SportId) {
  if (sportId === SportId.Soccer) {
    return soccerNews;
  }

  if (sportId === SportId.Volleyball) {
    return volleyballNews;
  }

  return [];
}
