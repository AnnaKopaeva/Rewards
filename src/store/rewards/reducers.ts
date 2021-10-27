import { createSlice } from "@reduxjs/toolkit";

import { ErrorEntity } from "../../interfaces/ErrorEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";

import { fetchRewards, fetchRewardsByUser } from "./actions";

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
    createReward: (state: RewardsStore, action: { payload: RewardEntity }) => {
      state.all = [...state.all, action.payload];
      state.my = [...state.all, action.payload].filter(
        (el) => el.user.id === action.payload.userBy.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRewards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRewards.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.all = payload;
    });
    builder.addCase(fetchRewards.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchRewardsByUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRewardsByUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.my = payload;
    });
    builder.addCase(fetchRewardsByUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { createReward } = rewardsSlice.actions;

export default rewardsSlice.reducer;
