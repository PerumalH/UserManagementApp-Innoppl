import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";
import profileSlice from "./slices/profileSlice";
import todoSlice from "./slices/todoSlice";
export const store = configureStore({
  reducer: { auth: AuthSlice, profile: profileSlice, todos: todoSlice },
});

export default store;
