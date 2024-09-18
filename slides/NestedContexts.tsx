import { Appear, CodePane, Heading, Slide } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function NestedContexts() {
  return (
    <Slide className="overflow-auto">
      <Heading>Wielokrotne zagnieżdżone konteksty</Heading>
      <CodePane language="tsx" theme={synthwave84}>
        {`
          const App = () => {
              return (
                  <AuthProvider>
                      <ThemeProvider>
                          <LanguageProvider>
                              <NotificationProvider>
                                  <MainComponent />
                              </NotificationProvider>
                          </LanguageProvider>
                      </ThemeProvider>
                  </AuthProvider>
              );
          };      
        `}
      </CodePane>
    </Slide>
  );
}
