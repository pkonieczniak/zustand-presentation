import { Button, Checkbox, Flex, Notification, TextInput } from '@mantine/core';
import { useForm, hasLength, isNotEmpty } from '@mantine/form';
import { useState } from 'react';
import { Slide, CodePane } from 'spectacle';

export function Slide4() {
  return (
    <Slide>
      {/* <Notification
        title="Dziękujęmy za rejestracje"
        style={{
          position: 'absolute',
          right: 0,
          zIndex: 100,
          width: '300px',
        }}
      /> */}
      <Flex columnGap="xl" style={{ height: '100%' }}>
        <div style={{ maxHeight: '100%', overflow: 'auto' }}>
          <CodePane
            language="tsx"
            highlightRanges={[
              [2, 4],
              [3, 5],
              [8, 10],
            ]}
          >
            {PseudoCode()}
          </CodePane>
        </div>
        <RegistrationForm2 />
      </Flex>
    </Slide>
  );
}

function PseudoCode() {
  return `
    function RegistrationForm() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

      return (
        <Form onSubmit={() => {}}>
          <Input
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <Input
            value={password}
            type="password"
            onChange={event => setPassword(event.target.value)}
          />
          <Checkbox
            checked={hasAcceptedTerms}
            onChange={() => setHasAcceptedTerms(prev => !prev)}
            label="Default checkbox"
          />
        </Form>
      );
    }
  `;
}

function RegistrationForm2() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
      hasAcceptedTerms: false,
    },
    validate: {
      username: hasLength({ min: 2 }),
      hasAcceptedTerms: isNotEmpty(),
      password: isNotEmpty(),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(values => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })}
      style={{
        rowGap: '16px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <TextInput
        label="username"
        key={form.key('username')}
        {...form.getInputProps('username')}
      />
      <TextInput
        label="password"
        type="password"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <Checkbox
        label="Accept terms"
        key={form.key('hasAcceptedTerms')}
        {...form.getInputProps('hasAcceptedTerms', { type: 'checkbox' })}
      />
      <Button type="submit" disabled={!form.isValid()} loading={isLoading}>
        Submit
      </Button>
    </form>
  );
}

/*
 Cześć! W dzisiejszej prezentacji opowiem o Zustand, czyli bibliotece która jest odpowiedzialna za zarządzanie stanem w aplikacjach frontendowych.
*/
{
  /* <UnorderedList>
        <Appear tagName='li'>
          Przekazywanie 
        </Appear>
        <Appear tagName='li'>
          Bar
        </Appear>
      </UnorderedList> */
}
{
  /* <Stepper tagName="p" alwaysVisible  values={['foo', 'bar']}>
      {(value, step, isActive) => {
        if (!isActive) {
          return null;
        }
        return value
      }} */
}
{
  /* </Stepper> */
}
{
  /* <Appear>
        Bar
      </Appear> */
}
