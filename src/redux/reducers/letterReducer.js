// letterReducer.js
import { createSlice } from "@reduxjs/toolkit";
import data from "../../shared/data.json";
import uuid from "react-uuid";

export const letterSlice = createSlice({
  name: "letter",
  initialState: {
    letters: data.map((aData) => ({
      ...aData,
      id: uuid(),
    })),
  },
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      newLetter.id = uuid();

      return {
        ...state,
        letters: [...state.letters, newLetter],
      };
    },
    updateLetters: (state, action) => {
      const updatedLetters = action.payload;

      return {
        ...state,
        letters: updatedLetters,
      };
    },
  },
});

export const { addLetter, updateLetters } = letterSlice.actions;

export default letterSlice.reducer;
