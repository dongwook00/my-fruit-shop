import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FruitType } from '../components/common/Fruit/Fruit';

type State = {
  list: FruitType[];
  filtered: FruitType[];
};

const initialState: State = {
  list: [],
  filtered: [],
};

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    setFruits: (state, action: PayloadAction<{ value: FruitType[] }>) => {
      state.list = action.payload.value;
      state.filtered = action.payload.value;
    },
    filterAll: (state) => {
      state.filtered = state.list;
    },
    filterNormal: (state) => {
      state.filtered = state.list.filter((fruit) => !fruit.isPrime);
    },
    filterPrime: (state) => {
      state.filtered = state.list.filter((fruit) => fruit.isPrime);
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
