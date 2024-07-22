import { createSlice } from '@reduxjs/toolkit';

interface recepieState {
  recepieCart: any[];
}

const initialState: recepieState = {
  recepieCart: [],
};

export const recepieSlice = createSlice({
  name: 'recepie',
  initialState,
  reducers: {
    addToRecepie: (state, action) => {
      state.recepieCart.push(action.payload);
    },
  },
});
export const { addToRecepie } = recepieSlice.actions;
export default recepieSlice.reducer;
