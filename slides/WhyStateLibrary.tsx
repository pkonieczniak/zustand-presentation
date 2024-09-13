import { Slide, Heading, Appear, UnorderedList, ListItem } from 'spectacle';

export function WhyStateLibrary() {
  return (
    <Slide className="overflow-auto">
      <Heading>Dlaczego potrzebujemy kolejnej biblioteki?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Rozwiązania dostarczone z biblioteką React takie jak:{' '}
            <strong>useState</strong>
            ,&nbsp;
            <strong>useReducer</strong>, <strong>Context</strong> nie skalują
            się dobrze i posiadają ograniczenia
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Zadaniem Contextu jest rozwiązanie problemu{' '}
            <strong>Prop Drillingu</strong> i dostarczenie prostego mechanizmu
            DI
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Źle zastosowany Context może powodować nadmierne renderowanie
            aplikacji oraz błędy.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Potrzebujemy bardziej zaawansowanych funkcjonalności jak trwałe
            przechowywanie danych po stronie klienta, intergracja z API
            przeglądarki, <strong>LocalStorage</strong>,{' '}
            <strong>IndexedDB</strong>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}
