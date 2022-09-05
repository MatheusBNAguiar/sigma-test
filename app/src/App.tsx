import styled from '@emotion/styled';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sanction } from './pages/Sanction/Sanction';
import { Sanctions } from './pages/Sanctions/Sanctions';

const AppContainer = styled.div`
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

console.log(import.meta.env.API_BASE_URL)

const queryClient = new QueryClient();

export default function App() {
  return (
    <AppContainer>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
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
