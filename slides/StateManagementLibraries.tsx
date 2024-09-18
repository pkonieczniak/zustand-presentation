import { Slide, Heading, Appear, UnorderedList, ListItem } from 'spectacle';

export function StateManagementLibraries() {
  return (
    <Slide className="overflow-auto full-width-slide">
      <iframe
        src="https://npm-compare.com/jotai,mobx,recoil,redux,xstate,zustand/#timeRange=SIX_MONTH"
        width={'100%'}
        height={'100%'}
      />
    </Slide>
  );
}
