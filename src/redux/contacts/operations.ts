import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "../../types/types";

export const fetchContacts = createAsyncThunk<
  Contact[],
  undefined,
  {
    rejectValue: string;
  }
>("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response: AxiosResponse = await axios.get("contacts");
    return response.data as Contact[];
  } catch (err) {
    return thunkAPI.rejectWithValue((err as { message: string }).message);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Contact,
  {
    rejectValue: string;
  }
>("contacts/addContact", async (newContact, thunkAPI) => {
  try {
    const response: AxiosResponse = await axios.post("contacts", newContact);
    return response.data as Contact;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as { message: string }).message);
  }
});

export const deleteContact = createAsyncThunk<
  Contact,
  string,
  {
    rejectValue: string;
  }
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const response: AxiosResponse = await axios.delete(`contacts/${contactId}`);
    return response.data as Contact;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as { message: string }).message);
  }
});
