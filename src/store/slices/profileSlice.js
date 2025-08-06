import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileData: {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  },
};

const isProfilePresent = localStorage.getItem("profile");
if (isProfilePresent) {
  const parsedProfile = JSON.parse(isProfilePresent);
  initialState.profileData = { ...initialState.profileData, ...parsedProfile };
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profileData = { ...state.profileData, ...action.payload };
      localStorage.setItem("profile", JSON.stringify(state.profileData));
    },
    loadProfile: (state, action) => {
      state.profileData = { ...state.profileData, ...action.payload };
    },
  },
});

export const { updateProfile, loadProfile } = profileSlice.actions;

export default profileSlice.reducer;
