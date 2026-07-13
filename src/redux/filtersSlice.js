import { createSlice } from '@reduxjs/toolkit';

const filtersSlise = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filtersSlise.actions;
export const filtersSliceReducer = filtersSlise.reducer;
export const selectNameFilter = state => state.filters.name;
// state.filters.name; filters - ключ редюсера
