import { createGlobalStyle } from 'styled-components';
import colors from './colors.style';

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
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    color: ${colors.darkGray};
    overflow-y: scroll;
  }

  .typography-prime {
    font-style: italic;
    font-weight: 700;
    color: ${colors.orange};
  }
`;
