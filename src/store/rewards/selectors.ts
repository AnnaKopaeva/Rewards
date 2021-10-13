import { AppState } from "../rootReducer";

export const getRewardsSelector = (state: AppState) => state.rewards;

export const getAllRewardsSelector = (state: AppState) => state.rewards.all;
export const getMyRewardsSelector = (state: AppState) => state.rewards.my;
