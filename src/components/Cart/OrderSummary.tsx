import { StyledOrderSummary } from './OrderSummary.styles';
import numberWithCommas from '../../helpers/numberWithCommas';

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
        <span className="value">{numberWithCommas(primeTotal)} 원</span>
      </div>
      <div className="general-sum">
        <span className="item">일반 과일</span>
        <span className="value">{numberWithCommas(normalTotal)} 원</span>
      </div>
      <div className="total">
        <span className="item">총 상품금액</span>
        <span className="value">{numberWithCommas(total)} 원</span>
      </div>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
