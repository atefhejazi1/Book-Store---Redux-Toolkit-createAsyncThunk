import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInsert } from "./reportSlice";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3000/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBooks = createAsyncThunk(
  "book/insertBooks",
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
      bookData.userName = getState().auth.name;

      const res = await fetch("http://localhost:3000/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch(logInsert({ name: "insertBook", status: "success" }));
      return data;
    } catch (error) {
      dispatch(logInsert({ name: "insertBook", status: "failed" }));
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3000/books/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.error = action.payload;
    });

    builder.addCase(insertBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(insertBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
      
      state.books.push(action.payload);
    });
    builder.addCase(insertBooks.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.error = action.payload;
    });

    // delete book

    builder.addCase(deleteBook.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);

      state.books = state.books.filter((el) => el.id !== action.payload.id);
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
