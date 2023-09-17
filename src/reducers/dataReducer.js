import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    error: null,
    items: [],
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteItem: (state, action) => {
      const itemIndex = action.payload;
      if (itemIndex >= 0 && itemIndex < state.items.length) {
        // Remove the item at the specified index
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, deleteItem} = dataSlice.actions;

export default dataSlice.reducer;