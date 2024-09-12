import { Grid, GridCol, Select } from '@mantine/core';
import { Slide } from 'spectacle';
import { SportEvents } from '../components/SportEvents';
import { SportId } from '../types';
import { useState } from 'react';

export function Slide5() {
  const [selectedSport, setSelectedSport] = useState<string>(
    SportId.Soccer.toString(),
  );

  return (
    <Slide>
      <Grid>
        <GridCol span={4} style={{ paddingLeft: '20px' }}>
          <Select
            label="Wybierz dyscyplinę"
            onChange={(value) => {
              if (value) {
                setSelectedSport(value);
              }
            }}
            value={selectedSport}
            data={[
              { label: 'Piłka nożna', value: SportId.Soccer.toString() },
              { label: 'Siatkówka', value: SportId.Volleyball.toString() },
            ]}
          />
        </GridCol>
        <GridCol>
          <SportEvents sportId={Number(selectedSport)} />
        </GridCol>
      </Grid>
    </Slide>
  );
}
