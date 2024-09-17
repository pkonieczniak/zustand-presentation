import { SlideLayout } from 'spectacle';

export function Agenda() {
  return (
    <SlideLayout.List
      title="Agenda"
      items={[
        'Stan aplikacji',
        'Dlaczego potrzebujemy kolejnej biblioteki?',
        'Obecne rozwiązania na rynku',
        'Zustand',
        'Podsumowanie',
      ]}
    ></SlideLayout.List>
  );
}
