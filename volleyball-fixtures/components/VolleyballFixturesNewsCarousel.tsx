import { Anchor, Paper } from '@mantine/core';
import { VolleyballFixturesIcon } from './VolleyballFixturesIcon';

export function VolleyballFixturesNewsCarousel() {
  const news = [
    'Wypełniamy katowicki Spodek! Mamy bilety na wyjątkowy mecz o AL-KO Superpuchar Polski siatkarzy!',
    'Wraca PlusLiga! Po 138 dniach przerwy znów będziemy emocjonować się najlepszymi rozgrywkami w Europie',
  ];

  return (
    <Paper className="banner">
      <div className="banner-content">
        {news.map((message) => {
          return (
            <div key={message}>
              <VolleyballFixturesIcon />
              <Anchor href="#">{message}</Anchor>
            </div>
          );
        })}
      </div>
    </Paper>
  );
}
