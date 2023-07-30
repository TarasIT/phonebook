import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserAuth } from "../../types/types";
import { RootState } from "../store";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const regist = createAsyncThunk<
  UserAuth,
  User,
  {
    rejectValue: string;
  }
>("auth/registration", async (credentials, thunkAPI) => {
  try {
    const response: AxiosResponse = await axios.post(
      "users/signup",
      credentials
    );
    setAuthHeader(response.data.token);
    return response.data as UserAuth;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as { message: string }).message);
  }
});

export const logIn = createAsyncThunk<
  UserAuth,
  User,
  {
    rejectValue: string;
  }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const response: AxiosResponse = await axios.post(
      "users/login",
      credentials
    );
    setAuthHeader(response.data.token);
    return response.data as UserAuth;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as { message: string }).message);
  }
});

export const logOut = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue((err as { message: string }).message);
  }
});

export const refreshUser = createAsyncThunk<
  User,
  undefined,
  { state: RootState; rejectValue: string }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    const response: AxiosResponse = await axios.get("users/current");
    return response.data as User;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as { message: string }).message);
  }
});
