import { StyledOrderSummary } from './OrderSummary.styles';
import { Button } from '../common';
import numberWithCommas from '../../helpers/numberWithCommas';
import { useAppDispatch } from '../../redux/hooks';
import { pay } from '../../redux/fruitsSlice';

type Props = {
  total: number;
  normalTotal: number;
  primeTotal: number;
};

const OrderSummary: React.FC<Props> = ({ total, normalTotal, primeTotal }) => {
  const dispatch = useAppDispatch();
  return (
    <StyledOrderSummary>
      <div className="prime-sum">
        <span className="item">
          <span className="typography-prime">prime</span>
          <span> 과일</span>
        </span>
        <span className="value">{numberWithCommas(primeTotal)} 원</span>
      </div>
      <div className="general-sum">
        <span className="item">일반 과일</span>
        <span className="value">{numberWithCommas(normalTotal)} 원</span>
      </div>
      <div className="divider" />
      <div className="total">
        <span className="item">총 상품금액</span>
        <span className="value">{numberWithCommas(total)} 원</span>
      </div>
      <div className="btn-group">
        <Button type="primary" text="결제하기" callback={() => dispatch(pay())} />
      </div>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
