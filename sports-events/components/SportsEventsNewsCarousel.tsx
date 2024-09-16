import { Anchor, Paper } from '@mantine/core';
import { SportsEventsIcon } from './SportsEventsIcon';
import { useSportsStore } from '../stores/sports-events.store';

export function AdvertCarousel() {
  const news = useSportsStore((state) => state.news);

  return (
    <Paper className="banner">
      <div className="banner-content">
        {news.map(({ text, sportId }) => {
          return (
            <div key={text}>
              <SportsEventsIcon sportId={sportId} />
              <Anchor href="#">{text}</Anchor>
            </div>
          );
        })}
      </div>
    </Paper>
  );
}
