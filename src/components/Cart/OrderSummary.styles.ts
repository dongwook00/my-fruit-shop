import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const StyledOrderSummary = styled.section`
  width: 25rem;
  .item {
    font-size: 1.6rem;
    font-weight: 700;
    width: 9rem;
    text-align: right;
  }
  .prime-sum {
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .general-sum {
    margin-bottom: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .divider {
    width: 25rem;
    height: 1px;
    background: ${colors.divider};
  }

  .value {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 1.2rem;
    .item {
      font-size: 1.8rem;
      font-weight: 700;
      width: 10rem;
      transform: translateX(-1rem);
    }
    .value {
      font-size: 2.6rem;
      color: ${colors.totalPrice};
    }
  }
  .btn-group {
    display: flex;
    justify-content: end;
    margin-top: 3.2rem;
  }
`;
