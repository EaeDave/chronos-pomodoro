// PascalCase
// App
// MeuComponente

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  console.log('Teste');
  return (
    // React Fragment
    <>
      {/* Componente Olá, Mundo! */}
      <Heading>
        Olá, Mundo 1{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}
