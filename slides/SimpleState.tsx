import { Appear, CodePane, Slide, Stepper, useSteps } from 'spectacle';
import foo from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function SimpleState() {
  return (
    <Slide>
      <CodePane language="jsx" theme={foo}>
        {`
          function FixturesPage () {
            return (
              <Container>
                <SportEvent
                  id={1}
                  sportId={SportId.Volleyball}
                  teamLeft="PGE Projekt Warszawa"
                  teamRight="Cuprum Stilon Gorzów"
                  teamLeftLogo="https://foo-bar.png"
                  teamRightLogo="https://foo-baz.png"
                  tv="TV Polsat Sport 1"
                  gameDate="14.09.2024, 14:45"
                />
                <SportEvent
                  id={2}
                  sportId={SportId.Volleyball}
                  teamLeft="PGE Projekt Warszawa"
                  teamRight="Cuprum Stilon Gorzów"
                  teamLeftLogo="https://foo-bar.png"
                  teamRightLogo="https://foo-baz.png"
                  tv="TV Polsat Sport 1"
                  gameDate="14.09.2024, 14:45"
                />
              </Container>
              ...
            )
          }
                `}
      </CodePane>
      {/* <Appear>
        <CodePane language="jsx" theme={foo}>
          {`
              function FixturesPage () {
                return (
                  <Container>
                    <SportEvents sportId={SportId.Soccer}>
                  </Container>
                )
              }

              function SportsEvents ({ sportId }: SportsEventsProps) {
              
              }
            `}
        </CodePane>
      </Appear> */}
    </Slide>
  );
}
