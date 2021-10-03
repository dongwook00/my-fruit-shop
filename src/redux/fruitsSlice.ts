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
    filter: (state, action: PayloadAction<{ value: string }>) => {
      state.filter = action.payload.value;
    },
    subtractFruits: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = state.list.findIndex((fruits) => fruits.id === action.payload.id);

      if (state.list[targetIndex].qty === 0) return;

      state.list[targetIndex].qty--;
      state.list[targetIndex].stock++;
    },
    addFruits: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = state.list.findIndex((fruits) => fruits.id === action.payload.id);

      if (state.list[targetIndex].stock === 0) return;

      state.list[targetIndex].qty++;
      state.list[targetIndex].stock--;
    },
  },
});

export const { setFruits, filter, subtractFruits, addFruits } = fruitsSlice.actions;

export default fruitsSlice.reducer;
