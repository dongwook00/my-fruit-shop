import React from 'react';
import { Header } from './components/Header';
import { StyledMain } from './App.styles';
import { TopFilter } from './components/TopFilter';
import { Fruits } from './components/FruitList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <TopFilter />
        <Fruits />
      </StyledMain>
    </>
  );
};

export default App;
