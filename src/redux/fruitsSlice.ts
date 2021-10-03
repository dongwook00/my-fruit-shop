import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FruitType } from '../components/common/Fruit/Fruit';
import { FILTER_TYPES } from '../components/FruitList';

type State = {
  list: FruitType[];
  filter: string;
};

const initialState: State = {
  list: [],
  filter: FILTER_TYPES.all,
};

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<{ value: FruitType[] }>) => {
      state.list = action.payload.value;
    },
    filter: (state, action: PayloadAction<{ value: string }>) => {
      state.filter = action.payload.value;
    },
    subtract: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = state.list.findIndex((fruits) => fruits.id === action.payload.id);

      if (state.list[targetIndex].qty === 0) return;

      state.list[targetIndex].qty--;
      state.list[targetIndex].stock++;
    },
    add: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = state.list.findIndex((fruits) => fruits.id === action.payload.id);

      if (state.list[targetIndex].stock === 0) return;

      state.list[targetIndex].qty++;
      state.list[targetIndex].stock--;
    },
    cancel: (state, action: PayloadAction<{ id: number }>) => {
      const targetIndex = state.list.findIndex((fruits) => fruits.id === action.payload.id);
      state.list[targetIndex].stock += state.list[targetIndex].qty;
      state.list[targetIndex].qty = 0;
    },
    pay: (state) => {
      state.list.forEach((fruit) => {
        fruit.stock += fruit.qty;
        fruit.qty = 0;
      });
    },
  },
});

export const { set, filter, subtract, add, cancel, pay } = fruitsSlice.actions;

export default fruitsSlice.reducer;
