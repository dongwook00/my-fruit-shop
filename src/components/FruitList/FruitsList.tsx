import { StyledFruits } from './FruitsList.styles';
import Fruit from './Fruit/Fruit';

const Fruits: React.FC = () => {
  return (
    <StyledFruits>
      <Fruit />
    </StyledFruits>
  );
};

export default Fruits;
