import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";
import todoSlice from "./slices/todoSlice";
export const store = configureStore({
  reducer: { auth: AuthSlice, todos: todoSlice },
});

export default store;
