import { Button } from '../common';
import { StyledTab } from './Tab.styles';

const Tab: React.FC = () => {
  return (
    <StyledTab>
      <Button text="상품목록" />
      <Button text="장바구니" />
    </StyledTab>
  );
};

export default Tab;
