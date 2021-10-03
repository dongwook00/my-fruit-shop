import { Container, StyledCart, LayoutOrderSummary } from './Cart.styles';
// import { Fruit } from '../common';
import OrderSummary from './OrderSummary';

const Fruits: React.FC = () => {
  return (
    <Container>
      <StyledCart>
        <h1>asd</h1>
      </StyledCart>
      <LayoutOrderSummary>
        <OrderSummary />
      </LayoutOrderSummary>
    </Container>
  );
};

export default Fruits;
