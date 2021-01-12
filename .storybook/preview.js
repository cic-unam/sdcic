// SDCIC 1.0
// Previsualización de historias

import React from 'react';
import DocsTheme from './theme';
import StyleProvider from '../src/style';

// Parámetros
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: DocsTheme,
  },
}

// Decoradores
export const decorators = [
  Story => (
    <>
      <StyleProvider>
        <Story />
      </StyleProvider>
    </>
  ),
];
