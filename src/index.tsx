import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  };

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
