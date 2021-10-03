import { StyledFruitsOnCart } from './FruitsOnCart.styles';
import { useAppDispatch } from '../../../redux/hooks';
import { cancel } from '../../../redux/fruitsSlice';
import Button from '../Button';
import numberWithCommas from '../../../helpers/numberWithCommas';

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
      <div className="type typography-prime">{isPrime ? 'prime' : ''}</div>
      <div className="description">
        <div className="picture">{image}</div>
        <div className="text">
          <h5 className="name">{name}</h5>
          <div className="price">{`${numberWithCommas(price)}원`}</div>
          <div className="qty">
            <span className="item">수량</span>
            <span className="value">{qty}</span>
          </div>
          <div className="divider" />
          <div className="total-price">
            <span className="item">상품금액</span>
            <span className="value">{numberWithCommas(total)}원</span>
          </div>
        </div>
      </div>
      <div className="actions">
        <Button type="secondary" text="취소" callback={() => dispatch(cancel({ id }))} />
      </div>
    </StyledFruitsOnCart>
  );
};

export default FruitsOnCart;
