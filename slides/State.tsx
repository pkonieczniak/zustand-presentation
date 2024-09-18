import { Slide, Heading, Appear, UnorderedList, ListItem } from 'spectacle';

export function State() {
  return (
    <Slide className="overflow-auto">
      <Heading>Stan</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Stan to pamięć komponentu. Pozwala przechowywać informacje i w
            wyniku zmiany danych wyświetlać użytkownikowi odpowiedni widok
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Zmiana stanu powoduje przerenderowanie komponentu</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Stan jest niemutowalny. Zmianę stanu przeprowadzamy za pomocą
            setter'a
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Stan jest prywatny i wyizolowany. Każdy instacja komponentu posiada
            swój stan, a wartość stanu możemy przekazać jedynie za pomocą
            propsów
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}
