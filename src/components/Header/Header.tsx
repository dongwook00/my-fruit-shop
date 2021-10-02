import { StyledHeader } from './Header.styles';
import HeaderTitle from './HeaderTitle';
import Tab from './Tab';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderTitle />
      <Tab />
    </StyledHeader>
  );
};

export default Header;
