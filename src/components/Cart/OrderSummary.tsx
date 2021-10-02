import { StyledOrderSummary } from './OrderSummary.styles';

const OrderSummary: React.FC = () => {
  return (
    <StyledOrderSummary>
      <div className="prime-sum">prime과일</div>
      <div className="general-sum">일반과일</div>
      <div className="total">총상품금액</div>
      <button>결제하기</button>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
