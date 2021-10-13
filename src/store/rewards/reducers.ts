import { createSlice } from "@reduxjs/toolkit";

import { ErrorEntity } from "../../interfaces/ErrorEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";

import rewards from "../../mockedData/rewards";

export interface RewardsStore {
  all: RewardEntity[];
  my: RewardEntity[];
  loading: boolean;
  error: ErrorEntity;
}

const initialState: RewardsStore = {
  all: rewards,
  my: [],
  loading: false,
  error: null,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    getRewards: (state: RewardsStore, action) => {
      state.loading = true;
    },
    setRewards: (state: RewardsStore, action) => {
      state.all = action.payload.all;
      state.my = action.payload.my;
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
      // state.all = action.payload; // .filter(() => null);
      // state.my = action.payload; // .filter(() => null);
      state.loading = false;
    },
  },
});

export const { getRewards, setRewards, getRewardsFailed, getMyRewards, createRewards } =
  rewardsSlice.actions;

export default rewardsSlice.reducer;
