import { Select } from '@mantine/core';
import { SportId } from '../types';
import { useSportsStore } from '../stores/sports-events.store';

export function SportsEventsSearch() {
  const selectedSportId = useSportsStore((state) => state.selectedSportId);
  const changeSport = useSportsStore((state) => state.changeSport);

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
