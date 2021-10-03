import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
