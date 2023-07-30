import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { ContactsState } from "../../types/types";

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = (type: "pending" | "fulfilled" | "rejected") =>
  isAnyOf(...extraActions.map((action) => action[type]));

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addMatcher(getActions("pending"), (state) => {
        state.isLoading = true;
      })
      .addMatcher(getActions("fulfilled"), (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(getActions("rejected"), (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
