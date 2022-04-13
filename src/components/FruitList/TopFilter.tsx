import { StyledTopFilter } from './TopFilter.styles';
import { Button, PrimeFilterButton } from '../common';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filter } from '../../redux/fruitsSlice';
import { FILTER_TYPES } from '.';

const TopFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.fruits.filter);

  return (
    <StyledTopFilter>
      <Button
        type={currentFilter === 'all' ? 'primary' : 'white'}
        text="All"
        callback={() => dispatch(filter({ value: FILTER_TYPES.all }))}
      />
      <Button
        type={currentFilter === 'normal' ? 'primary' : 'white'}
        text="Fruits"
        callback={() => dispatch(filter({ value: FILTER_TYPES.normal }))}
      />
      <PrimeFilterButton
        type={currentFilter === 'prime' ? 'primary' : 'white'}
        callback={() => dispatch(filter({ value: FILTER_TYPES.prime }))}
      />
    </StyledTopFilter>
  );
};

export default TopFilter;
