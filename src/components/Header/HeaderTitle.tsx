import { StyledHeaderTitle } from './HeaderTitle.styles';
import { Title } from '../common';

const HeaderTitle: React.FC = () => {
  return (
    <StyledHeaderTitle>
      <Title text="크몽이네 과일가게" />
    </StyledHeaderTitle>
  );
};

export default HeaderTitle;
