import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './stylesConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/vacations-app">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
