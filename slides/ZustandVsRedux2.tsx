import { Flex, Grid, GridCol, Image } from '@mantine/core';
import {
  Appear,
  Heading,
  ListItem,
  Slide,
  UnorderedList,
  Quote,
} from 'spectacle';

export function ZustandVsRedux2() {
  return (
    <Slide className="full-width-slide">
      <Heading>
        <Flex align={'center'} justify={'center'} gap={'md'}>
          <Image src="/public/images/zustand.png" w={'100px'} />
          Zustand vs Redux
          <Image src="/public/images/redux.svg" w={'100px'} />
        </Flex>
      </Heading>
      <Grid justify="right">
        <GridCol span={6}>
          <UnorderedList>
            <ListItem>
              Elastyczny, bezstronny - możemy dopasować rozwiązanie do swoich
              potrzeb i rozwiązywać problemy na różne sposoby
            </ListItem>
            <ListItem>
              Minimalistyczna dokumentacja, mniejszy ekosystem
            </ListItem>
            <ListItem>
              Rozmiar: <strong>1.2 kB</strong> (zustand)
            </ListItem>
          </UnorderedList>
        </GridCol>
        <GridCol span={6}>
          <UnorderedList>
            <ListItem>
              Określony sposób działania i rozwiązywania problemów
            </ListItem>
            <ListItem>
              Większe community i ekosystem, lepsza dokumentacja i wsparcie
            </ListItem>
            <ListItem>
              Rozmiar: 50.8 kB (reduxjs/toolkit + react-redux 11.3 kB)
            </ListItem>
          </UnorderedList>
        </GridCol>
      </Grid>
    </Slide>
  );
}
