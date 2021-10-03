import styled from 'styled-components';

export const StyledFruit = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  grid-template-columns: 1fr;

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
      font-size: 2rem;
      margin-bottom: 1.9rem;
    }
    .price {
      font-size: 1.6rem;
      margin-bottom: 1.3rem;
    }
  }
  .picture {
    font-size: 8rem;
  }
  .stock {
    margin-bottom: 0.8rem;
  }
  .item {
    color: #727585;
    margin-right: 0.8rem;
  }
  .btn-group {
    display: flex;
    justify-content: end;
  }
`;
