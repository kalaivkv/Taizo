import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  page: string;
}

const initialState: NavigationState = {
  page: "home",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    navigate: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { navigate } = navigationSlice.actions;
export default navigationSlice.reducer;
