import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE_FILTER = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE_FILTER,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
