import { StyledOrderSummary } from './OrderSummary.styles';

type Props = {
  total: number;
  normalTotal: number;
  primeTotal: number;
};

const OrderSummary: React.FC<Props> = ({ total, normalTotal, primeTotal }) => {
  return (
    <StyledOrderSummary>
      <div className="prime-sum">
        <span className="item">prime 과일</span>
        <span className="value">{primeTotal} 원</span>
      </div>
      <div className="general-sum">
        <span className="item">일반 과일</span>
        <span className="value">{normalTotal} 원</span>
      </div>
      <div className="total">
        <span className="item">총 상품금액</span>
        <span className="value">{total} 원</span>
      </div>
      <button>결제하기</button>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
