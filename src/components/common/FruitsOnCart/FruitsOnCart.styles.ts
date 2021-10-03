import styled from 'styled-components';

export const StyledFruitsOnCart = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  grid-template-columns: 1fr;

  .type {
    color: orange;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
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
  .actions {
    display: flex;
    justify-content: end;
  }
`;
