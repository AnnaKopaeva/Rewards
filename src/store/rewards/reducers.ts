import { createSlice } from "@reduxjs/toolkit";

import { ErrorEntity } from "../../interfaces/ErrorEntity";
import { CreateRewardEntity, RewardEntity } from "../../interfaces/RewardEntity";

interface SetRewardsAction {
  all: RewardEntity[];
  my: RewardEntity[];
}

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
  loading: true,
  error: null,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    getRewards: (state: RewardsStore) => {
      state.loading = true;
    },
    setRewards: (state: RewardsStore, action: { payload: SetRewardsAction }) => {
      state.all = action.payload.all;
      state.my = action.payload.my;
      state.loading = false;
    },
    getRewardsFailed: (state: RewardsStore, action: { payload: ErrorEntity }) => {
      state.loading = false;
      state.error = action.payload;
    },
    createRewards: (state: RewardsStore, action: { payload: CreateRewardEntity }) => {
      state.loading = true;
    },
    updateRewards: (state: RewardsStore, action: { payload: RewardEntity }) => {
      state.all = [...state.all, action.payload];
      state.loading = false;
    },
    updateMyRewards: (state: RewardsStore, action: { payload: RewardEntity }) => {
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
