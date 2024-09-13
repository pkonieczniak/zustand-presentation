import { Anchor, Paper } from '@mantine/core';
import { SportIcon } from './SportIcon';
import { useSportsContext } from './SportsContext/SportsContextProvider';

export function AdvertCarousel() {
  const { news } = useSportsContext();

  return (
    <Paper className="banner">
      <div className="banner-content">
        {news.map(({ text, sportId }) => {
          return (
            <>
              <SportIcon sportId={sportId} />
              <Anchor href="#">{text}</Anchor>
            </>
          );
        })}
      </div>
    </Paper>
  );
}
