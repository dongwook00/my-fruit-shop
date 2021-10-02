import { Container, StyledCart, LayoutOrderSummary } from './Cart.styles';
import { Fruit } from '../common';
import OrderSummary from './OrderSummary';

const Fruits: React.FC = () => {
  return (
    <Container>
      <StyledCart>
        <Fruit />
        <Fruit />
        <Fruit />
        <Fruit />
      </StyledCart>
      <LayoutOrderSummary>
        <OrderSummary />
      </LayoutOrderSummary>
    </Container>
  );
};

export default Fruits;
