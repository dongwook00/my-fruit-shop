import styled from 'styled-components';

export const StyledTab = styled.ul`
  grid-column: 3;
  display: flex;
  justify-content: end;
  align-items: center;
  list-style: none;

  li:last-child {
    margin-left: 1.2rem;
    margin-right: 1.6rem;
  }
`;
