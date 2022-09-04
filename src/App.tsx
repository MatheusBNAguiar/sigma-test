import styled from '@emotion/styled';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sanction } from './pages/Sanction';
import { Sanctions } from './pages/Sanctions';

const AppContainer = styled.div`
  flex: 1;
  background-color: white;
  width: 100%;
  max-width: 1268px;
  height: 100%;
  max-height: 90vh;
  margin: 12px 20px;
  padding: 20px;
  border-radius: 8px;
  overflow: auto;
  
  scrollbar-width: auto;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    border: 3px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #8590a7;
  }
`

export default function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="sanctions" >
            <Route index element={<Sanctions />} />
            <Route path=":sanctionId" element={<Sanction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}
