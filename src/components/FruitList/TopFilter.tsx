import { StyledTopFilter } from './TopFilter.styles';
import { Button } from '../common';
import { useAppDispatch } from '../../redux/hooks';
import { filterAll, filterNormal, filterPrime } from '../../redux/fruitsSlice';

const TopFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledTopFilter>
      <Button text="전체" callback={() => dispatch(filterAll())} />
      <Button text="일반과일" callback={() => dispatch(filterNormal())} />
      <Button text="Prime과일" callback={() => dispatch(filterPrime())} />
    </StyledTopFilter>
  );
};

export default TopFilter;
