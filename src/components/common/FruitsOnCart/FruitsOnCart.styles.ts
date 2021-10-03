import styled from 'styled-components';
import colors from '../../../styles/colors.style';

export const StyledFruitsOnCart = styled.div`
  padding: 1.2rem 1.6rem 1.6rem;
  display: grid;
  grid-template-rows: 2.3rem 14.5rem 4rem;
  grid-template-columns: 1fr;
  background: ${colors.white};
  border-radius: 1.5rem;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.02));

  .type {
    font-size: 2rem;
  }
  .description {
    padding: 1rem;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 0.4fr 0.6fr;
  }
  .text {
    margin-left: 4rem;

    .name {
      height: 2.3rem;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    .price {
      height: 1.9rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: ${colors.black};
      margin-bottom: 1rem;
    }
  }
  .picture {
    margin-top: 2rem;
    margin-left: 3rem;
    font-size: 8rem;
  }
  .stock {
    height: 1.9rem;
    margin-bottom: 0.3rem;
  }
  .qty {
    height: 1.9rem;
    margin-bottom: 1.2rem;
  }
  .divider {
    width: 16.3rem;
    height: 1px;
    background: ${colors.divider};
  }
  .total-price {
    margin-top: 1.2rem;
  }
  .item {
    color: ${colors.lightGray};
    font-weight: 500;
    margin-right: 0.8rem;
  }
  .value {
    font-weight: 700;
  }
  .actions {
    display: flex;
    justify-content: end;
  }
`;
