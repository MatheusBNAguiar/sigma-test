import { css, Global } from '@emotion/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../src/App'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (Story: React.FunctionComponent, { globals }) => (
    <BrowserRouter>
      <GlobalStyle />
      <Global
        styles={css`
      #root {
        background-color: white;
      }
      
      `}
      />
      <Story />
    </BrowserRouter>
  ),
];
