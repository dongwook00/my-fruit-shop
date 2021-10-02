import React from 'react';
import { Header } from './components/Header';
import { StyledMain } from './App.styles';
import { TopFilter } from './components/TopFilter';
const App: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <TopFilter />
      </StyledMain>
    </>
  );
};

export default App;
