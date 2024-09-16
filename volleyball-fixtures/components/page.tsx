import { Grid, GridCol } from '@mantine/core';
import { VolleyballFixtures } from './VolleyballFixtures';
import { VolleyballFixturesFollowed } from './VolleyballFixturesFollowed';
import { VolleyballFixturesNewsCarousel } from './VolleyballFixturesNewsCarousel';
import { VolleyballFixturesSearch } from './VolleyballFixturesSearch';
import { VolleyballFixturesProvider } from '../contexts/VolleyballFixturesProvider';

export function VolleyballFixturesPage() {
  return (
    <VolleyballFixturesProvider>
      <Grid>
        <GridCol span={12}>
          <VolleyballFixturesSearch />
        </GridCol>
        <GridCol>
          <VolleyballFixturesNewsCarousel />
        </GridCol>
        <GridCol span={12}>
          <Grid>
            <GridCol span={10}>
              <VolleyballFixtures />
            </GridCol>
            <GridCol span={2} style={{ marginTop: '20px' }}>
              <VolleyballFixturesFollowed />
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>
    </VolleyballFixturesProvider>
  );
}
