import { StyledFruit } from './Fruit.styles';

const Fruits: React.FC = () => {
  return (
    <StyledFruit>
      <div className="type">prime</div>
      <div className="description">
        <div className="picture">🍇</div>
        <div className="text">
          <h5 className="name">포도</h5>
          <div className="price">3,000원</div>
          <div className="stock">
            <span className="item">잔량</span>
            <span className="value">0</span>
          </div>
          <div className="qty">
            <span className="item">수량</span>
            <span className="value">10</span>
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

export default Fruits;
