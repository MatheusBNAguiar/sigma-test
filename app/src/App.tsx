import styled from '@emotion/styled';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Sanction } from './pages/Sanction/Sanction';
import { Sanctions } from './pages/Sanctions/Sanctions';
import { css, Global } from '@emotion/react';

export const AppContainer = styled.div`
  flex: 1;
  background-color: white;
  width: 100%;
  max-width: 1268px;
  height: 100%;
  max-height: 90vh;
  margin: 0.75rem 1.25rem;
  padding: 1.25rem;
  border-radius: 8px;
  overflow: auto;

  scrollbar-width: auto;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    border: 4px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #8590a7;
  }
`;

const globalStyle = css`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;

    color-scheme: light dark;
    color: #213547;
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  @media screen and (max-width: 768px) {
    :root {
      font-size: 12px;
    }
  }

  * {
    box-sizing: border-box;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }

  #root {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }
`;

export const GlobalStyle = () => <Global styles={globalStyle} />;

const queryClient = new QueryClient();

export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/sanctions" />} />
            <Route path="sanctions">
              <Route index element={<Sanctions />} />
              <Route path=":sanctionId" element={<Sanction />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AppContainer>
  );
}
