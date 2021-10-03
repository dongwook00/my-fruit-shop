import styled from 'styled-components';

export const Container = styled.section`
  width: 80.5%;
  margin: 0 auto;
`;

export const StyledCart = styled.section`
  display: grid;
  grid-auto-rows: 24rem;
  grid-template-columns: repeat(auto-fill, minmax(41.6rem, 1fr));
  grid-row-gap: 4.8rem;
  grid-column-gap: 4.8rem;
`;
export const LayoutOrderSummary = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 4.8rem;
`;
