import {
  Slide,
  Heading,
  Appear,
  UnorderedList,
  ListItem,
  Link,
  Quote,
} from 'spectacle';

export function WhyStateLibrary() {
  return (
    <Slide className="overflow-auto">
      <Heading>Dlaczego potrzebujemy kolejnej biblioteki?</Heading>
      <UnorderedList>
        <ListItem>
          Rozwiązania dostarczone z biblioteką React takie jak:{' '}
          <strong>useState</strong>
          ,&nbsp;
          <strong>useReducer</strong>, <strong>Context</strong> nie skalują się
          dobrze i posiadają ograniczenia
        </ListItem>
        <ListItem>
          Zadaniem Contextu jest rozwiązanie problemu{' '}
          <strong>Prop Drillingu</strong> i dostarczenie prostego mechanizmu DI
        </ListItem>
        <ListItem>
          Źle zastosowany Context może powodować nadmierne renderowanie
          aplikacji oraz błędy.
        </ListItem>
        <ListItem>
          Potrzebujemy bardziej zaawansowanych funkcjonalności jak trwałe
          przechowywanie danych po stronie klienta, intergracja z API
          przeglądarki, <strong>LocalStorage</strong>,{' '}
          <strong>IndexedDB</strong>
        </ListItem>
      </UnorderedList>
    </Slide>
  );
}
