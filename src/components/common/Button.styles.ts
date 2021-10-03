import styled from 'styled-components';
import colors from '../../styles/colors.style';
import { darken } from 'polished';

export const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  max-height: 4rem;
  font-weight: 700;
  &:not(:first-child) {
    margin-left: 1.6rem;
  }
`;

export const Prime = styled(StyledButton)`
  background: ${colors.orange};
  color: ${colors.white};
  &:hover {
    background: ${darken(0.1, colors.orange)};
  }
`;

export const Primary = styled(StyledButton)`
  background: ${colors.yellow};
  color: ${colors.darkGray};
  &:hover {
    background: ${darken(0.1, colors.yellow)};
  }
`;

export const Secondary = styled(StyledButton)`
  background: ${colors.lightBlue};
  color: ${colors.darkGray};
  &:hover {
    background: ${darken(0.1, colors.lightBlue)};
  }
`;

export const White = styled(StyledButton)`
  background: ${colors.white};
  color: ${colors.darkGray};
  &:hover {
    background: ${darken(0.1, colors.white)};
  }
`;

export const Disabled = styled(StyledButton)`
  background: ${colors.disabledBackground};
  color: ${colors.disabledColor};
  cursor: not-allowed;
  pointer-events: none;
`;
