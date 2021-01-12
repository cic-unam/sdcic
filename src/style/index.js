// SDCIC 1.0
// Estilo general ()

import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import color from './color';
import font from './font';
import space from './space';
import effect from './effect';

// Estilos globales
const GlobalStyle = createGlobalStyle`

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

`;

// Variables de diseño
const Tokens = {
  color,
  font,
  space,
  effect
};

// ...
const StyleProvider = ({ children }) => (
  <ThemeProvider theme={Tokens}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default StyleProvider;
