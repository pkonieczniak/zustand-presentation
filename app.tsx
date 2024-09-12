import '@mantine/core/styles.css';
import { Presentation } from './slides';
import { MantineProvider } from '@mantine/core';

export function App() {
  return (
    <MantineProvider>
      <Presentation />
    </MantineProvider>
  );
}
