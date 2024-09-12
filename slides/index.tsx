import { Deck, DefaultTemplate } from 'spectacle';
import { Slide1 } from './Intro';
import { Slide2 } from './Agenda';
import { Slide3 } from './StateDefinition';
import { Slide4 } from './TableDisplayStatic';
import { SimpleState } from './SimpleState';
import { Slide5 } from './TableDisplayWithInteractive';

export function Presentation() {
  return (
    <Deck template={() => <DefaultTemplate />} className="deck">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <SimpleState />
      <Slide4 />
      <Slide5 />
    </Deck>
  );
}
