import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '../common';
import { StyledTab } from './Tab.styles';

const Tab: React.FC = () => {
  const location = useLocation();

  return (
    <StyledTab>
      <li>
        <NavLink to="/">
          <Button type={location.pathname === '/' ? 'secondary' : 'white'} text="Fruit list" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          <Button type={location.pathname === '/cart' ? 'secondary' : 'white'} text="Cart" />
        </NavLink>
      </li>
    </StyledTab>
  );
};

export default Tab;
