import { StyledHeaderTitle } from './HeaderTitle.styles';
import { Title } from '../common';

const HeaderTitle: React.FC = () => {
  return (
    <StyledHeaderTitle>
      <Title text="My Fruit Shop" />
    </StyledHeaderTitle>
  );
};

export default HeaderTitle;
