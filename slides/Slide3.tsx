import { Slide, Heading, Appear, Text } from 'spectacle';

export function Slide3() {
  return (
    <Slide>
      <Heading>Stan Aplikacji</Heading>
      <Appear>
        <Text>
          Stan aplikacji to wszystkie dane, które determinują jak powinna
          zachować się aplikacja i co powinno zostać wyświetlone w danym
          momencie
        </Text>
      </Appear>
      <Appear>
        <Text>
          Stan aplikacji może być lokalny lub globalny w zależności od przypadku
          użycia
        </Text>
      </Appear>
    </Slide>
  );
}
