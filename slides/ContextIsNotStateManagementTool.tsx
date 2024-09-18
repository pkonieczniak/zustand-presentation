import {
  Slide,
  Heading,
  Appear,
  UnorderedList,
  ListItem,
  Link,
  Quote,
  Text,
} from 'spectacle';

export function ContextIsNotStateManagementTool() {
  return (
    <Slide className="overflow-auto">
      <Heading>Dlaczego potrzebujemy kolejnej biblioteki?</Heading>
      <Text>
        <strong>Is Context a "state management" tool?</strong>
      </Text>
      <Quote>
        No. Context is a form of Dependency Injection. It is a transport
        mechanism - it doesn't "manage" anything. Any "state management" is done
        by you and your own code, typically via useState/useReducer.
        <br /> -{' '}
        <small>Mark "acemarke" Erikson, twórca narzędzia Redux Toolkit</small>
      </Quote>
    </Slide>
  );
}
