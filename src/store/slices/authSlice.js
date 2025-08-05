import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const isAuthPresent = localStorage.getItem("auth");
if (isAuthPresent) {
  const parsedAuth = JSON.parse(isAuthPresent);
  if (parsedAuth.isAuthenticated) {
    initialState.user = parsedAuth.user;
    initialState.isAuthenticated = parsedAuth.isAuthenticated;
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: action.payload,
          isAuthenticated: true,
        })
      );
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("auth");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError } =
  authSlice.actions;

export const login = (credentials) => (dispatch) => {
  dispatch(loginStart());
  const { username, password } = credentials;
  if (username === "HpK" && password === "PerumalHpk") {
    const user = {
      id: 1,
      username: "HpK",
      email: "PerumalHpk@gmail.com",
    };
    dispatch(loginSuccess(user));
    return { success: true };
  } else {
    dispatch(loginFailure("Invalid username or password"));
    return { success: false, error: "Invalid username or password" };
  }
};

export default authSlice.reducer;
