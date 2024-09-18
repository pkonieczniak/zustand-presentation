import { Flex, Grid, GridCol } from '@mantine/core';
import {
  Heading,
  Slide,
  Image,
  Text,
  CodePane,
  Appear,
  ListItem,
  UnorderedList,
} from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function CreateSelectors() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Zustand autoselectors</Heading>
        <Appear>
          <CodePane language="tsx" theme={synthwave84}>
            {`
              import { StoreApi, UseBoundStore } from 'zustand';

              type WithSelectors<S> = S extends { getState: () => infer T }
                ? S & { use: { [K in keyof T]: () => T[K] } }
                : never;

              export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
                _store: S,
              ) => {
                let store = _store as WithSelectors<typeof _store>;
                store.use = {};
                for (let k of Object.keys(store.getState())) {
                  (store.use as any)[k] = () => store(s => s[k as keyof typeof s]);
                }

                return store;
              };
            `}
          </CodePane>
        </Appear>
      </Flex>
    </Slide>
  );
}
