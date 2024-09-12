import { SportEventData, SportId } from '../types';

const volleyballEvents: SportEventData[] = [
  {
    id: 1,
    sportId: SportId.Volleyball,
    teamLeft: 'Aluron CMC Warta Zawiercie',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/498371/inline/scalecrop=100x100/e74885/aluron_cmc_logo_2020.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/498381/inline/scalecrop=100x100/ba40e9/luk_politechnika_lublin.png',
    teamRight: 'BOGDANKA LUK Lublin',
    tv: 'TV Polsat Sport 1',
    gameDate: '13.09.2024, 20:30',
  },
  {
    id: 2,
    sportId: SportId.Volleyball,
    teamLeft: 'PGE Projekt Warszawa',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/498383/inline/scalecrop=100x100/fe2eda/projekt_warszawa.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/498378/inline/scalecrop=100x100/d2e037/zaksa.png',
    teamRight: 'ZAKSA Kędzierzyn-Koźle',
    tv: 'TV Polsat Sport 1',
    gameDate: '14.09.2024, 14:45',
  },
  {
    id: 3,
    sportId: SportId.Volleyball,
    teamLeft: 'Cuprum Stilon Gorzów',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/624319/inline/scalecrop=100x100/39e6c1/rgb_logo_stilon_gorzow_cuprum_q.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/498386/inline/scalecrop=100x100/b6a6c9/2017_trefl.png',
    teamRight: 'Trefl Gdańsk',
    tv: 'TV Polsat Sport 1',
    gameDate: '14.09.2024, 17:30',
  },
  {
    id: 4,
    sportId: SportId.Volleyball,
    teamLeft: 'Barkom Każany Lwów',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/498373/inline/scalecrop=100x100/eabd32/lwow.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/498380/inline/scalecrop=100x100/a10c1c/2017_jastrzebski.png',
    teamRight: 'Jastrzębski Węgiel',
    tv: 'TV Polsat Sport 1',
    gameDate: '14.09.2024, 20:30',
  },
  {
    id: 5,
    sportId: SportId.Volleyball,
    teamLeft: 'Asseco Resovia Rzeszów',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/498372/inline/scalecrop=100x100/d4fdbe/2017_asseco.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/498384/inline/scalecrop=100x100/a9972e/stal_logo.png',
    teamRight: 'PSG Stal Nysa',
    tv: 'TV Polsat Sport 1',
    gameDate: '15.09.2024, 14:45',
  },
  {
    id: 6,
    sportId: SportId.Volleyball,
    teamLeft: 'Indykpol AZS Olsztyn',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/624318/inline/scalecrop=100x100/69acb9/azsolsztyn_gryf_2024.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/498382/inline/scalecrop=100x100/094003/skra.png',
    teamRight: 'PGE GiEK Skra Bełchatów',
    tv: 'TV Polsat Sport 1',
    gameDate: '15.09.2024, 17:30',
  },
  {
    id: 7,
    sportId: SportId.Volleyball,
    teamLeft: 'GKS Katowice',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/576694/inline/scalecrop=100x100/8a9bd5/logo_gks.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/624577/inline/scalecrop=100x100/3f6bcf/logo_mks_bedzin.png',
    teamRight: 'Nowak-Mosty MKS Będzin',
    tv: 'TV Polsat Sport 1',
    gameDate: '15.09.2024, 20:30',
  },
  {
    id: 8,
    sportId: SportId.Volleyball,
    teamLeft: 'Steam Hemarpol Norwid Częstochowa',
    teamLeftLogo:
      'https://www.plusliga.pl/dl/624576/inline/scalecrop=100x100/3c5c8b/logo_norwid_herb.png',
    teamRightLogo:
      'https://www.plusliga.pl/dl/498385/inline/scalecrop=100x100/c44f16/slepsk.png',
    teamRight: 'Ślepsk Malow Suwałki',
    tv: 'TV Polsat Sport 1',
    gameDate: '17.09.2024, 17:30',
  },
];

const soccerEvents: SportEventData[] = [
  {
    id: 9,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online Canal+ Sport 5',
    teamLeft: 'Motor Lublin',
    teamRight: 'Górnik Zabrze',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/1719228112_09_Motor_Lublin.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/04_Gornik_Zabrze.png',
    gameDate: '13.09.2024, 18:00',
  },
  {
    id: 10,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online Canal+ 4k UltraHD',
    teamLeft: 'GKS Katowice',
    teamRight: 'Widzew Łódź',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/1719228742_02_GKS_Katowice2.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2022_23/clubs/Widzew-Lodz-herb.png',
    gameDate: '13.09.2024, 20:30',
  },
  {
    id: 11,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online',
    teamLeft: 'Lechia Gdańsk',
    teamRight: 'Radomiak Radom',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/07_Lechia_Gdansk.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/11_Radomiak_Radom.png',
    gameDate: '14.09.2024, 14:45',
  },
  {
    id: 12,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online Canal+ Sport 5',
    teamLeft: 'Cracovia',
    teamRight: 'Pogoń Szczecin',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/1719319415_01_Cracovia.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/1719319351_11_Pogon_Szczecin.png',
    gameDate: '14.09.2024, 17:30',
  },
  {
    id: 13,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online Canal+ 4k UltraHD',
    teamLeft: 'Lech Poznań',
    teamRight: 'Jagiellonia Białystok',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2022_23/clubs/05_Lech_Pozna%C5%84.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/1724850285_05_Jagiellonia_Bialystok.png',
    gameDate: '14.09.2024, 20:15',
  },
  {
    id: 14,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online Canal+ Sport 5',
    teamLeft: 'Piast Gliwice',
    teamRight: 'Puszcza Niepołomice',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/09_Piast_Gliwice.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2023_2024/clubs/10_Puszcza_Niepolomice.png',
    gameDate: '15.09.2024, 12:15',
  },
  {
    id: 15,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online',
    teamLeft: 'Korona Kielce',
    teamRight: 'KGHM Zagłębie Lubin',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/1719319482_05_Korona_Kielce.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/18_Zaglebie_Lubin.png',
    gameDate: '15.09.2024, 14:45',
  },
  {
    id: 16,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online Canal+ 4k UltraHD Canal+ Premium TVP Sport Canal+ Sport 3 Canal+ Online Canal+ 4k UltraHD Canal+ Premium TVP Sport',
    teamLeft: 'Legia Warszawa',
    teamRight: 'Raków Częstochowa',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/Herb_Legia_Warszawa_2.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/12_Rakow_Czestochowa.png',
    gameDate: '15.09.2024, 17:30',
  },
  {
    id: 17,
    sportId: SportId.Soccer,
    tv: ' Canal+ Sport 3 Canal+ Online',
    teamLeft: 'Śląsk Wrocław',
    teamRight: 'Stal Mielec',
    teamLeftLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/13_Slask_Wroclaw.png',
    teamRightLogo:
      'https://d2vzq0pwftw3zc.cloudfront.net/fit-in/100x100/filters:quality(30)/de5a136b-59d1-40ce-8b51-c043a004751b/2021_2022/clubs/14_Stal_Mielec.png',
    gameDate: '16.09.2024, 19:00',
  },
];

export async function getEvents(sportId: SportId) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(1500);

  if (sportId === SportId.Soccer) {
    return soccerEvents;
  }

  if (sportId === SportId.Volleyball) {
    return volleyballEvents;
  }

  return [];
}

// EKSTRAKLASA
// const mappedEvents = events.map((event) => {
//   const tv = Array.from(
//     event.querySelectorAll('app-transmission-providers-carousel'),
//   )
//     .map((element) => Array.from(element.querySelectorAll('img')))
//     .flat()
//     .reduce((accumulator, node) => {
//       return (accumulator += ` ${node.alt}`);
//     }, '');
//   console.log(tv);
//   const teamLeft = event.querySelector('a:nth-of-type(1) span').innerText;
//   const teamLeftLogo = event.querySelector('a:nth-of-type(1) img').src;
//   const teamRight = event.querySelector('a:nth-of-type(2) span').innerText;
//   const teamRightLogo = event.querySelector('a:nth-of-type(2) img').src;
//   return { tv, teamLeft, teamRight, teamLeftLogo, teamRightLogo };
// });
// const events = Array.from(
//   document.querySelectorAll('app-league-widget-schedule-match'),
// ).filter((item, index) => {
//   return index <= 8 ? true : false;
// });

// Plusliga
// const filterableContent = document.querySelectorAll(
//   '.filterable-content.ajax-synced-games',
// );

// const events = Array.from(
//   document.querySelectorAll('app-league-widget-schedule-match'),
// ).filter((item, index) => {
//   return index <= 8 ? true : false;
// });
// const mappedEvents = events.map((event) => {
//   const tv = event.querySelector('.game-tv img').title;
//   const teamLeft = event.querySelector('.game-team.left').innerText;
//   const teamLeftLogo = event.querySelector('.game-logo.left img').src;
//   const teamRight = event.querySelector('.game-team.right').innerText;
//   const teamRightLogo = event.querySelector('.game-logo.right img').src;
//   return { teamLeft, teamLeftLogo, teamRightLogo, teamRight, tv };
// });
