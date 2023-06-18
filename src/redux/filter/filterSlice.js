import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterReducer: (state, { payload }) => {
      return payload;
    },
  },
});

export const { changeFilterReducer } = filterSlice.actions;
export default filterSlice.reducer;
