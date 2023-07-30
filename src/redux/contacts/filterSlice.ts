import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../../types/types";

const initialState: FilterState = { filter: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterContacts(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
