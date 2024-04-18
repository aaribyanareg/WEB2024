import React from 'react';
import ReactDOM from 'react-dom/client';

import '../src/Global.scss'

import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);
