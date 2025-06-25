import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import authReducer from "./authSlice";
import reportReducer from "./reportSlice";

const store = configureStore({
  reducer: {
    // <-- You need to provide an object for multiple reducers
    book: bookReducer, // 'book' will be the name of this slice in your Redux state
    auth: authReducer, // 'auth' will be the name of this slice in your Redux state
    report: reportReducer,
  },
});

export default store;
