import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import "@fontsource/inter";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/ui-ux-portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
