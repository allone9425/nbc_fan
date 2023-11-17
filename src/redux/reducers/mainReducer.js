import { createSlice } from "@reduxjs/toolkit";
import data from "../../shared/data.json";
import uuid from "react-uuid";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    letters: data.map((aData) => {
      return {
        ...aData,
        id: uuid(),
      };
    }),
  },
  reducers: {
    addLetter: (state, action) => {
      //레터를 추가
      //state.letters;
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = mainSlice.actions;

export default mainSlice.reducer;
