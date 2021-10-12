import { createSlice } from "@reduxjs/toolkit";

export interface RewardsStore {
  all: any[];
  my: any[];
  loading: boolean;
  error: any;
}

const initialState: RewardsStore = {
  all: [],
  my: [],
  loading: false,
  error: null,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    getRewards: (state: RewardsStore, action) => {
      state.all = action.payload;
      state.loading = false;
    },
    getRewardsFailed: (state: RewardsStore, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMyRewards: (state: RewardsStore, action) => {
      state.my = action.payload;
      state.loading = false;
    },
    createRewards: (state: RewardsStore, action) => {
      state.all = action.payload.filter(() => null);
      state.my = action.payload.filter(() => null);
      state.loading = false;
    },
  },
});

export const { getRewards, getRewardsFailed, getMyRewards, createRewards } = rewardsSlice.actions;

export default rewardsSlice.reducer;
