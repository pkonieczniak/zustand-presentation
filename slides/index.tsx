import { Deck, DefaultTemplate } from 'spectacle';
import { Intro } from './Intro';
import { Agenda } from './Agenda';
import { ContextExample } from './ContextExample';
import { WhyStateLibrary } from './WhyStateLibrary';
import { NestedContexts } from './NestedContexts';
import { ContextUnnecessaryRerenders } from './ContextUnnecessaryRerenders';
import { UnsafeDefaultValues } from './UnsafeDefaultValues';

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
      <ContextUnnecessaryRerenders />
      <UnsafeDefaultValues />
      <NestedContexts />
    </Deck>
  );
}
