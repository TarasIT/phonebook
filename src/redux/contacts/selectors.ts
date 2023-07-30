import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectError = (state: RootState) => state.contacts.error;
export const selectContacts = (state: RootState) => state.contacts.items;
export const selectContactsFilter = (state: RootState) => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
