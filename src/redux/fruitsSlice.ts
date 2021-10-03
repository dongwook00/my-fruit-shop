import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FruitType } from '../components/common/Fruit/Fruit';

type State = {
  list: FruitType[];
  filter: string;
};

const initialState: State = {
  list: [],
  filter: 'all',
};

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    setFruits: (state, action: PayloadAction<{ value: FruitType[] }>) => {
      state.list = action.payload.value;
    },
    filterAll: (state) => {
      state.filter = 'all';
    },
    filterNormal: (state) => {
      // state.filter = state.list.filter((fruit) => !fruit.isPrime);
      state.filter = 'normal';
    },
    filterPrime: (state) => {
      state.filter = 'prime';
    },
    subtractFruits: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = state.list.findIndex((fruits) => fruits.id === action.payload.id);
      if (state.list[targetIndex].qty === 0) return;
      state.list[targetIndex].qty--;
    },
    addFruits: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = state.list.findIndex((fruits) => fruits.id === action.payload.id);
      state.list[targetIndex].qty++;
    },
  },
});

export const { setFruits, filterAll, filterNormal, filterPrime, subtractFruits, addFruits } = fruitsSlice.actions;

export default fruitsSlice.reducer;
