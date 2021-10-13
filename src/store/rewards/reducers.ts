import { createSlice } from "@reduxjs/toolkit";

import { ErrorEntity } from "../../interfaces/ErrorEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";

export interface RewardsStore {
  all: RewardEntity[];
  my: RewardEntity[];
  myTotal: number;
  giveTotal: number;
  loading: boolean;
  error: ErrorEntity;
}

const initialState: RewardsStore = {
  all: [],
  my: [],
  myTotal: 0,
  giveTotal: 0,
  loading: false,
  error: null,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    getRewards: (state: RewardsStore) => {
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
    createRewards: (state: RewardsStore, action) => {
      state.loading = true;
    },
    updateRewards: (state: RewardsStore, action) => {
      state.all = [...state.all, action.payload];
      state.loading = false;
    },
    updateMyRewards: (state: RewardsStore, action) => {
      state.my = [...state.my, action.payload];
      state.loading = false;
    },
  },
});

export const {
  getRewards,
  setRewards,
  getRewardsFailed,
  createRewards,
  updateRewards,
  updateMyRewards,
} = rewardsSlice.actions;

export default rewardsSlice.reducer;
