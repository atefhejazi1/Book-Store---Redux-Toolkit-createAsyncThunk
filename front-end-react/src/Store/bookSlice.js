import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      state.isLoading = true;
      console.log(action);
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });
  },
});

export default bookSlice.reducer;
