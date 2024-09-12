import { SlideLayout } from 'spectacle';

export function Slide1() {
  return (
    <SlideLayout.FullBleedImage
      objectFit="contain"
      src="/public/images/stores.png"
      imgProps={{ width: '100%', height: '100%' }}
      alt="Wojny Magazynowe - Wykorzystanie Zustand w CMS"
    />
  );
}
