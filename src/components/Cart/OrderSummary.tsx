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
          <span> Fruits</span>
        </span>
        <span className="value">${numberWithCommas(primeTotal)}</span>
      </div>
      <div className="general-sum">
        <span className="item">Fruits</span>
        <span className="value">${numberWithCommas(normalTotal)}</span>
      </div>
      <div className="divider" />
      <div className="total">
        <span className="item">Total</span>
        <span className="value">${numberWithCommas(total)}</span>
      </div>
      <div className="btn-group">
        <Button type="primary" text="Payment" callback={() => dispatch(pay())} />
      </div>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
