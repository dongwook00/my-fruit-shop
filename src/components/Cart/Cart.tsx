import { StyledCart } from './Cart.styles';
import { Fruit } from '../common';

const Fruits: React.FC = () => {
  return (
    <StyledCart>
      <Fruit />
      <Fruit />
      <Fruit />
      <Fruit />
    </StyledCart>
  );
};

export default Fruits;
