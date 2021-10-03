import { StyledTopFilter } from './TopFilter.styles';
import { Button } from '../common';
import { useAppDispatch } from '../../redux/hooks';
import { filter } from '../../redux/fruitsSlice';
import { FILTER_TYPES } from '.';

const TopFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledTopFilter>
      <Button text="전체" callback={() => dispatch(filter({ value: FILTER_TYPES.all }))} />
      <Button text="일반과일" callback={() => dispatch(filter({ value: FILTER_TYPES.normal }))} />
      <Button text="Prime과일" callback={() => dispatch(filter({ value: FILTER_TYPES.prime }))} />
    </StyledTopFilter>
  );
};

export default TopFilter;
