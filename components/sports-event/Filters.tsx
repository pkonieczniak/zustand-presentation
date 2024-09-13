import { Select } from '@mantine/core';
import { SportId } from './types';
import { useSportsContext } from './SportsContext/SportsContextProvider';

export function Filters() {
  const { changeSport, selectedSportId } = useSportsContext();

  return (
    <Select
      w={'250px'}
      label="Wybierz dyscyplinę"
      onChange={(value) => {
        if (value) {
          changeSport(Number(value));
        }
      }}
      value={selectedSportId.toString()}
      data={[
        { label: 'Piłka nożna', value: SportId.Soccer.toString() },
        { label: 'Siatkówka', value: SportId.Volleyball.toString() },
      ]}
    />
  );
}
