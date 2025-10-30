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
      <Heading />
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}
