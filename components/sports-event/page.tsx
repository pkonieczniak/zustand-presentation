import { Grid, GridCol } from '@mantine/core';
import { SportsEvents } from './SportsEvents';
import { ObservedEvents } from './ObservedEvents';
import { Filters } from './Filters';
import { SportsContextProvider } from './SportsContext/SportsContextProvider';
import { AdvertCarousel } from './AdvertCarousel';

export default function SportsEventsPage() {
  return (
    <SportsContextProvider>
      <Grid>
        <GridCol span={12}>
          <Filters />
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
              <ObservedEvents />
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>
    </SportsContextProvider>
  );
}
