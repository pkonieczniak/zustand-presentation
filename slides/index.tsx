import { Deck, DefaultTemplate } from 'spectacle';
import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Slide3 } from './Slide3';
import { Slide4 } from './Slide4';

export function Presentation() {
  return (
    <Deck template={() => <DefaultTemplate />}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
    </Deck>
  );
}
