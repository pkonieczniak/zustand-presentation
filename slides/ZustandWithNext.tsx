import {
  Slide,
  Heading,
  Appear,
  UnorderedList,
  ListItem,
  Link,
  Quote,
} from 'spectacle';

export function ZustandWithNext() {
  return (
    <Slide className="overflow-auto">
      <Heading>Zustand i Next</Heading>
      <UnorderedList>
        <ListItem>
          Komponenty serwerowe (RSC), <strong>nie powinny</strong> odczytywać,
          zapisywać do store'u
        </ListItem>
        <ListItem>
          Komponenty w Nexcie renderowane są dwukrotnie (<strong>SSR</strong>).
          Store musi być zainicializowany po stronie serwera, a następnie
          inicializowany ponownie po stronie klienta w celu uniknięcia błędów
          hydracji
        </ListItem>
        <ListItem>
          Unikanie globalnych storeów - Jeżeli dane są pobierane po stronie
          serwera i chcemy je przekazać do store'u
        </ListItem>
      </UnorderedList>
    </Slide>
  );
}
