import { SlideLayout } from 'spectacle';

export function Agenda() {
  return (
    <SlideLayout.List
      title="Agenda"
      items={[
        'Stan',
        'Context - Dlaczego potrzebujemy kolejnej biblioteki?',
        'Obecne rozwiązania na rynku',
        'Zustand',
      ]}
    ></SlideLayout.List>
  );
}
