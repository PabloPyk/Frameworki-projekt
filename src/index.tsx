import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
