import { SlideLayout } from 'spectacle';

export function Finalist() {
  return (
    <SlideLayout.FullBleedImage
      objectFit="contain"
      src="/zustand-presentation/images/finalist.png"
      imgProps={{ width: '100%', height: '100%' }}
      alt="Wojny Magazynowe - Wykorzystanie Zustand w CMS"
    />
  );
}
