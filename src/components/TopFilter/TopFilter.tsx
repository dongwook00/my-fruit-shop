import { StyledTopFilter } from './TopFilter.styles';
import { Button } from '../common';

const TopFilter: React.FC = () => {
  return (
    <StyledTopFilter>
      <Button text="전체" />
      <Button text="일반과일" />
      <Button text="Prime과일" />
    </StyledTopFilter>
  );
};

export default TopFilter;
