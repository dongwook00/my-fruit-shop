import { StyledFruitsOnCart } from './FruitsOnCart.styles';
import { useAppDispatch } from '../../../redux/hooks';
import { cancel } from '../../../redux/fruitsSlice';
import Button from '../Button';

export type FruitsOnCartType = {
  id: number;
  name: string;
  image: string;
  qty: number;
  price: number;
  total: number;
  isPrime: boolean;
};

const FruitsOnCart: React.FC<FruitsOnCartType> = (props) => {
  const dispatch = useAppDispatch();
  const { id, name, image, qty, price, total, isPrime } = props;
  return (
    <StyledFruitsOnCart>
      {isPrime && <div className="type typography-prime">prime</div>}
      <div className="description">
        <div className="picture">{image}</div>
        <div className="text">
          <h5 className="name">{name}</h5>
          <div className="price">{`${price}원`}</div>
          <div className="qty">
            <span className="item">수량</span>
            <span className="value">{qty}</span>
          </div>
          <div className="">
            <span className="item">상품금액</span>
            <span className="value">{total}원</span>
          </div>
        </div>
      </div>
      <div className="actions">
        <Button text="취소" callback={() => dispatch(cancel({ id }))} />
      </div>
    </StyledFruitsOnCart>
  );
};

export default FruitsOnCart;
