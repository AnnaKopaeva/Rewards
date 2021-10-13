import { createSelector } from "reselect";

import { getUserProfileSelector } from "../users/selectors";
import { AppState } from "../rootReducer";
import { UserEntity } from "../../interfaces/UserEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";
import { RewardsStore } from "./reducers";

export const getRewardsSelector = (state: AppState) => state.rewards;

const getTotalSum = (data: RewardEntity[]) =>
  data.reduce((total: number, el) => total + +el.reward, 0);

export const getAllRewardsSelector = createSelector(getRewardsSelector, (rewards) => rewards.all);
export const getMyRewardsSelector = createSelector(getRewardsSelector, (rewards) => rewards.my);
export const getMyRewardsTotalSelector = createSelector(getRewardsSelector, (rewards) =>
  getTotalSum(rewards.my)
);
export const getGiveRewardsTotalSelector = createSelector(
  getRewardsSelector,
  getUserProfileSelector,
  (rewards: RewardsStore, profile: UserEntity) => {
    const giveRewards = rewards.all.filter((el: RewardEntity) => el.userBy.id === profile.id);
    return getTotalSum(giveRewards);
  }
);
