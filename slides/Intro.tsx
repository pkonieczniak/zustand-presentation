import { SlideLayout } from 'spectacle';

export function Intro() {
  return (
    <SlideLayout.FullBleedImage
      objectFit="contain"
      src="/zustand-presentation/images/stores.png"
      imgProps={{ width: '100%', height: '100%' }}
      alt="Wojny Magazynowe - Wykorzystanie Zustand w CMS"
    />
  );
}
