import { StyledFruits } from './FruitsList.styles';
import { Fruit } from '../common';

const Fruits: React.FC = () => {
  return (
    <StyledFruits>
      <Fruit />
    </StyledFruits>
  );
};

export default Fruits;
