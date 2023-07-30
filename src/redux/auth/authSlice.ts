import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { regist, logIn, logOut, refreshUser } from "./operations";
import { AuthState, UserAuth, User } from "../../types/types";

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handleSuccessLoginAndRegistration = (
  state: AuthState,
  action: PayloadAction<
    UserAuth,
    string,
    {
      arg: User;
      requestId: string;
      requestStatus: "fulfilled";
    },
    never
  >
) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const handlePending = (state: AuthState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: AuthState,
  action: PayloadAction<
    string | undefined,
    string,
    {
      arg: User;
      requestId: string;
      requestStatus: "rejected";
      aborted: boolean;
      condition: boolean;
    } & (
      | {
          rejectedWithValue: true;
        }
      | ({
          rejectedWithValue: false;
        } & {})
    ),
    SerializedError
  >
) => {
  state.isLoading = false;
  if (typeof action.payload === "string") state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    errorReset: {
      reducer: (state, action: PayloadAction<string | null>) => {
        state.error = action.payload;
      },
      prepare: (payload: string | null) => ({ payload }),
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(regist.fulfilled, handleSuccessLoginAndRegistration)
      .addCase(regist.pending, handlePending)
      .addCase(regist.rejected, handleRejected)
      .addCase(logIn.fulfilled, handleSuccessLoginAndRegistration)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { errorReset } = authSlice.actions;
