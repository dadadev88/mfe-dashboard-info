import React from 'react';
import ReactDOM from 'react-dom/client';
import CryptoWidget from './presentation/CryptoWidget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoWidget />
  </React.StrictMode>
);
