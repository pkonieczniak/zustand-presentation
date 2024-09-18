import { Flex } from '@mantine/core';
import { Heading, Slide, Image, Text, CodePane, Appear } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function ContextDescription() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Flex h={'100%'} direction={'column'}>
        <Heading>Context</Heading>
        <Appear>
          <Text>
            <strong>Context</strong> to mechanizm który umożliwia przekazywanie
            danych wewnątrz drzewa komponentów bez konieczności podawania ich
            przez komponenty pośredniczące. Context składa się z Definicji i
            Providera.
          </Text>
        </Appear>
        <Appear>
          <CodePane language="tsx" theme={synthwave84}>
            {`
                import { createContext } from 'react;
                
                // Definicja Contextu. Obiekt potrzebny przy odczycie danych w komponencie
                // const { hasPremiumAccount } = useContext(UserContext)
                export const UserContext = createContext<{
                  username: string;
                  email: string;
                  hasPremiumAccount: boolean;
                } | null>(null);

                // Provider - Komponent, odpowiedzialny za dostarczanie wartości do childrenów
                export const UserContextProvider = ({
                  children,
                }: {
                  children: ReactNode;
                }) => {
                  const [username, setUsername] = useState('');
                  const [email, setEmail] = useState('');
                  const [hasPremiumAccount, setHasPremiumAccount] = useState(false);

                  useEffect(() = >{
                    // Pobieranie danych usera, ustawienia wartości
                  }, [])

                return (
                  <UserContext.Provider 
                    value={{
                      username,
                      email,
                      hasPremiumAccount,
                      setHasPremiumAccount
                    }}
                  >
                    {children}
                  </>
                )
              }
              `}
          </CodePane>
        </Appear>
      </Flex>
    </Slide>
  );
}
