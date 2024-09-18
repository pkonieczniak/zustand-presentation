import { Select, Grid, GridCol } from '@mantine/core';
import { LeagueId } from '../types';
import { useVolleyballFixturesStore } from '../stores/volleyball-fixtures.store';

export function VolleyballFixturesSearch() {
  const selectedLeague = useVolleyballFixturesStore(
    state => state.selectedLeague,
  );
  const selectedGameWeek = useVolleyballFixturesStore(
    state => state.selectedGameWeek,
  );
  const totalGameWeeks = useVolleyballFixturesStore(
    state => state.totalGameWeeks,
  );
  const changeLeague = useVolleyballFixturesStore(state => state.changeLeague);
  const changeGameWeek = useVolleyballFixturesStore(
    state => state.changeGameWeek,
  );

  return (
    <Grid>
      <GridCol span={3}>
        <Select
          label="Wybierz ligę"
          onChange={value => {
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
          onChange={value => {
            if (value) {
              changeGameWeek(Number(value));
            }
          }}
          value={selectedGameWeek.toString()}
          data={Array.from({ length: totalGameWeeks }).map((_, index) => ({
            label: `Kolejka ${index + 1}`,
            value: index.toString(),
          }))}
        />
      </GridCol>
    </Grid>
  );
}
