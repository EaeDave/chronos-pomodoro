// PascalCase
// App
// MeuComponente

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('Teste');
  return (
    // React Fragment
    <>
      {/* Componente Olá, Mundo! */}
      <Heading attr={1234} attr2='String'>
        Olá, Mundo 1
      </Heading>
      <Heading>Olá, Mundo 2</Heading>
      <Heading>Olá, Mundo 3</Heading>
      <Heading>Olá, Mundo 4</Heading>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}
