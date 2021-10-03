import { NavLink } from 'react-router-dom';
import { Button } from '../common';
import { StyledTab } from './Tab.styles';

const Tab: React.FC = () => {
  return (
    <StyledTab>
      <NavLink to="/">
        <Button text="상품목록" />
      </NavLink>
      <NavLink to="/cart">
        <Button text="장바구니" />
      </NavLink>
    </StyledTab>
  );
};

export default Tab;
