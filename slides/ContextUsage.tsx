import { Flex } from '@mantine/core';
import { Heading, Slide, Image, Text, CodePane, Appear } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function ContextUsage() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Użycie Contextu w komponentach</Heading>
        <Appear>
          <CodePane language="tsx" theme={synthwave84}>
            {`
              import { UserContextProvider } from './contexts/UserContext';
              
              function App () {
                return (
                  <Container>
                    <UserContextProvider>
                      <UserProfile />
                      <ProductList />
                      <PaymentInfo />
                    </UserContextProvider>
                    <ComponentNotUsingUserContext />
                  </Container>
                )
              }

              // Użycie contextu w childrenach
              import { UserContext } from './contexts/UserContext';
              function PaymentInfo () {
                const { hasPremiumAccount } = useContext(UserContext)
                return (
                  //...
                )
              }
            `}
          </CodePane>
        </Appear>
      </Flex>
    </Slide>
  );
}
