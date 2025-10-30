import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  // jsx (is JavaScript XML)
  // Roda duas vezes em modo StrictMode, para ajudar a identificar efeitos colaterais
  <StrictMode>
    <App />
  </StrictMode>,
);
