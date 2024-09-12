import { SlideLayout } from 'spectacle';

export function Slide2() {
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
