import { Select, Grid, GridCol } from '@mantine/core';
import { LeagueId } from '../types';
import { useVolleyballFixtures } from '../stores/volleyball-fixtures.store';

export function VolleyballFixturesSearch() {
  const selectedLeague = useVolleyballFixtures((state) => state.selectedLeague);
  const selectedGameWeek = useVolleyballFixtures(
    (state) => state.selectedGameWeek,
  );
  const changeLeague = useVolleyballFixtures((state) => state.changeLeague);
  const changeGameWeek = useVolleyballFixtures((state) => state.changeGameWeek);

  return (
    <Grid>
      <GridCol span={3}>
        <Select
          label="Wybierz ligę"
          onChange={(value) => {
            if (value) {
              changeLeague(Number(value));
            }
          }}
          value={selectedLeague.toString()}
          data={[
            { label: 'PlusLiga', value: LeagueId.PlusLiga.toString() },
            { label: 'TAURON Liga', value: LeagueId.Tauronliga.toString() },
            { label: 'PLS 1.Liga', value: LeagueId.Tauron1Liga.toString() },
          ]}
        />
      </GridCol>
      <GridCol span={2}>
        <Select
          label="Wybierz kolejkę"
          onChange={(value) => {
            if (value) {
              changeGameWeek(Number(value));
            }
          }}
          value={selectedGameWeek.toString()}
          data={[
            { label: 'Kolejka 1', value: '0' },
            { label: 'Kolejka 2', value: '1' },
            { label: 'Kolejka 3', value: '2' },
          ]}
        />
      </GridCol>
    </Grid>
  );
}
