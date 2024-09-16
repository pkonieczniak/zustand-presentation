import { Grid, GridCol } from '@mantine/core';
import { SportsEvents } from './SportsEvents';
import { SportsEventsFollowed } from './SportsEventsFollowed';
import { AdvertCarousel } from './SportsEventsNewsCarousel';
import { useFetchSportsData } from '../stores/sports-events.store';
import { SportsEventsSearch } from './SportsEventsSearch';

export default function SportsEventsPage() {
  useFetchSportsData();

  return (
    <Grid>
      <GridCol span={12}>
        <SportsEventsSearch />
      </GridCol>
      <GridCol>
        <AdvertCarousel />
      </GridCol>
      <GridCol span={12}>
        <Grid>
          <GridCol span={10}>
            <SportsEvents />
          </GridCol>
          <GridCol span={2} style={{ marginTop: '20px' }}>
            <SportsEventsFollowed />
          </GridCol>
        </Grid>
      </GridCol>
    </Grid>
  );
}
