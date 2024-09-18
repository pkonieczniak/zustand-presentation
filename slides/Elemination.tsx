import { SlideLayout } from 'spectacle';

export function Elemination() {
  return (
    <SlideLayout.FullBleedImage
      objectFit="contain"
      src="/public/images/elemination.png"
      imgProps={{ width: '100%', height: '100%' }}
      alt="Wojny Magazynowe - Wykorzystanie Zustand w CMS"
    />
  );
}
