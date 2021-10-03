import { StyledFruit } from './Fruit.styles';
import Button from '../Button';
import { useAppDispatch } from '../../../redux/hooks';
import { subtract, add } from '../../../redux/fruitsSlice';

export type FruitType = {
  id: number;
  name: string;
  image: string;
  stock: number;
  qty: number;
  price: number;
  isPrime: boolean;
};

const Fruit: React.FC<FruitType> = (props) => {
  const dispatch = useAppDispatch();
  const { id, name, image, stock, qty, price, isPrime } = props;
  let buttonType = isPrime ? 'prime' : 'primary';
  if (stock === 0) buttonType = 'disabled';

  return (
    <StyledFruit>
      <div className="type typography-prime">{isPrime ? 'prime' : ''}</div>
      <div className="description">
        <div className="picture">{image}</div>
        <div className="text">
          <h5 className="name">{name}</h5>
          <div className="price">{`${price}원`}</div>
          <div className="stock">
            <span className="item">잔량</span>
            <span className="value">{stock}</span>
          </div>
          <div className="qty">
            <span className="item">수량</span>
            <span className="value">{qty}</span>
          </div>
        </div>
      </div>
      <div className="btn-group">
        {qty > 0 && <Button type="secondary" text="빼기" callback={() => dispatch(subtract({ id }))} />}
        <Button type={buttonType} text="담기" callback={() => dispatch(add({ id }))} />
      </div>
    </StyledFruit>
  );
};

export default Fruit;
