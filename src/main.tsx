import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // jsx (is JavaScript XML)
  <StrictMode>
    <App />
  </StrictMode>,
);
