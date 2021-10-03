import { StyledFruits } from './FruitsList.styles';
import { Fruit } from '../common';
// import { TopFilter } from '../TopFilter';
import useHttpRequest from '../../hooks/useHttpRequest';
import { TopFilter } from '../TopFilter';

const Fruits: React.FC = () => {
  const { isLoading, isError, fruits, errorMessage } = useHttpRequest();
  const isReady = !isLoading && !isError;

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>{errorMessage}</h1>}
      {isReady && <TopFilter />}
      <StyledFruits>
        {isReady &&
          fruits.map((fruit) => (
            <Fruit
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              image={fruit.image}
              stock={fruit.stock}
              price={fruit.price}
              isPrime={fruit.isPrime}
            />
          ))}
        );
      </StyledFruits>
    </>
  );
};

export default Fruits;
