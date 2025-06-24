import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    name: "Atef Hejazi",
  },
  reducers: {
    logInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
