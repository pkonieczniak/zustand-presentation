import { Deck, DefaultTemplate } from 'spectacle';
import { Intro } from './Intro';
import { Agenda } from './Agenda';
import { State } from './State';
import { ZustandExample } from './ZustandExample';
import { WhyStateLibrary } from './WhyStateLibrary';
import { NestedContexts } from './NestedContexts';
import { ContextUnnecessaryRerenders } from './ContextUnnecessaryRerenders';
import { UnsafeDefaultValues } from './UnsafeDefaultValues';
import { StateExample } from './StateExample';
import { SharingStateExample } from './SharingStateExample';
import { PropDrilling } from './PropDrilling';
import { StateManagementLibraries } from './StateManagementLibraries';
import { Context } from './Context';
import { Libraries } from './Libraries';
import { ContextDescription } from './ContextDescription';
import { ContextUsage } from './ContextUsage';
import { AllConsumersRerender } from './AllConsumersRerender';

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
      <State />
      <StateExample />
      <SharingStateExample />
      <PropDrilling />
      <ContextDescription />
      <ContextUsage />
      <Context />
      <WhyStateLibrary />
      <ContextUnnecessaryRerenders />
      <UnsafeDefaultValues />
      <AllConsumersRerender />
      <NestedContexts />
      <Libraries />
      <StateManagementLibraries />
      <ZustandExample />
    </Deck>
  );
}
