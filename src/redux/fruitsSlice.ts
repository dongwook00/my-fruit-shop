import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FruitType } from '../components/common/Fruit/Fruit';

const initialState: FruitType[] = [];

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<{ value: FruitType[] }>) => {
      return action.payload.value;
    },
  },
});

export const { set } = fruitsSlice.actions;

export default fruitsSlice.reducer;
