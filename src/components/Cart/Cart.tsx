import { Container, StyledCart, LayoutOrderSummary } from './Cart.styles';
import { createSelector } from 'reselect';
import { FruitsOnCart } from '../common';
import OrderSummary from './OrderSummary';
import { useAppSelector } from '../../redux/hooks';

const Fruits: React.FC = () => {
  const fruitsOnCart = useAppSelector(
    createSelector(
      (state) => state.fruits.list.filter((fruit) => fruit.qty > 0),
      (cart) => cart.map((fruit) => ({ total: fruit.price * fruit.qty, ...fruit })),
    ),
  );

  const summary = useAppSelector(
    createSelector(
      (state) => state.fruits.list.filter((fruit) => fruit.qty > 0),
      (cart) => {
        const newCart = cart.map((fruit) => ({ total: fruit.price * fruit.qty, ...fruit }));
        const reduced = newCart.reduce(
          (acc, curr) => {
            acc.total += curr.total;
            if (curr.isPrime) acc.primeTotal += curr.total;
            else acc.normalTotal += curr.total;
            return acc;
          },
          { total: 0, normalTotal: 0, primeTotal: 0 },
        );

        return reduced;
      },
    ),
  );

  return (
    <Container>
      <StyledCart>
        {fruitsOnCart.map((fruit) => (
          <FruitsOnCart
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            image={fruit.image}
            qty={fruit.qty}
            price={fruit.price}
            total={fruit.total}
            isPrime={fruit.isPrime}
          />
        ))}
      </StyledCart>
      <LayoutOrderSummary>
        <OrderSummary total={summary.total} normalTotal={summary.normalTotal} primeTotal={summary.primeTotal} />
      </LayoutOrderSummary>
    </Container>
  );
};

export default Fruits;
