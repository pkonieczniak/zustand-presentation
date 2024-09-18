import { Flex, Grid, GridCol, Image } from '@mantine/core';
import {
  Appear,
  Heading,
  ListItem,
  Slide,
  UnorderedList,
  Quote,
} from 'spectacle';

export function ZustandVsRedux() {
  return (
    <Slide className="full-width-slide">
      <Heading>
        <Flex align={'center'} justify={'center'} gap={'md'}>
          <Image src="/zustand-presentation/images/zustand.png" w={'100px'} />
          Zustand vs Redux
          <Image src="/zustand-presentation/images/redux.svg" w={'100px'} />
        </Flex>
      </Heading>
      <Appear>
        <Grid justify="right">
          <GridCol span={6}>
            <UnorderedList>
              <ListItem>Minimalistyczny, łatwy w konfiugracji</ListItem>
              <ListItem>
                Niski próg wejścia. Wystarczy wiedzieć co to: store, akcja,
                selektor, middelware (opcjonalnie)
              </ListItem>
              <ListItem>Jeden globalny store lub wiele</ListItem>
            </UnorderedList>
          </GridCol>
          <GridCol span={6}>
            <UnorderedList>
              <ListItem>
                Wymaga więcej kodu{' '}
                <Quote>
                  "Redux is not meant to be the shortest way to write code -
                  it's meant to make it predictable and understandable" <br />-
                  <small>Dan Abramow, twórca Reduxa</small>
                </Quote>
              </ListItem>
              <ListItem>
                Wyższy próg wejścia - Akcje, reducery, thunki, StoreProvider
              </ListItem>
              <ListItem>Globalny store zbudowany ze sliceów</ListItem>
            </UnorderedList>
          </GridCol>
        </Grid>
      </Appear>
    </Slide>
  );
}
