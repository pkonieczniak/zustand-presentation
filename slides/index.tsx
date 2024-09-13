import { Deck, DefaultTemplate } from 'spectacle';
import { Intro } from './Intro';
import { Agenda } from './Agenda';
import { ContextExample } from './ContextExample';
import { WhyStateLibrary } from './WhyStateLibrary';

export function Presentation() {
  return (
    <Deck
      template={() => <DefaultTemplate />}
      className="deck"
      theme={{
        fontSizes: {
          h1: '50px',
          text: '30px',
        },
      }}
    >
      <Intro />
      <Agenda />
      <WhyStateLibrary />
      <ContextExample />
    </Deck>
  );
}
