import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
