import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContextProvider from './hooks/useTheme.js';
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
