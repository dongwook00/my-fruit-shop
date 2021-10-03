import { StyledFruit } from './Fruit.styles';

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
  const { id, name, image, stock, qty, price, isPrime } = props;
  return (
    <StyledFruit>
      {isPrime && <div className="type">prime</div>}
      <div className="description">
        <div className="picture">{image}</div>
        <div className="text">
          <h5 className="name">
            {name}
            {id}
          </h5>
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
      <div className="actions">
        <button className="btn">빼기</button>
        <button className="btn">담기</button>
      </div>
    </StyledFruit>
  );
};

export default Fruit;
