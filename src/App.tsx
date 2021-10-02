import React from 'react';
import { Header } from './components/Header';
import { StyledMain } from './App.styles';
import { TopFilter } from './components/TopFilter';
// import { FruitsList } from './components/FruitList';
import { Cart } from './components/Cart';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <TopFilter />
        {/* <FruitsList /> */}
        <Cart />
      </StyledMain>
    </>
  );
};

export default App;
