import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  book: null,
};

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/books");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default bookSlice.reducer;
