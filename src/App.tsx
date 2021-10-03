import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { Header } from './components/Header';
import { StyledMain } from './App.styles';

const FruitsList = loadable(() => import('./components/FruitList'));
const Cart = loadable(() => import('./components/Cart'));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Switch>
          <Route exact={true} path="/" component={FruitsList} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </StyledMain>
    </>
  );
};

export default App;
