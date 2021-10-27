import { createSelector } from "reselect";

import { selectProfileData } from "../profile/selectors";
import { AppState } from "../rootReducer";
import { UserEntity } from "../../interfaces/UserEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";
import { RewardsStore } from "./reducers";

export const selectRewards = (state: AppState) => state.rewards;

const getTotalSum = (data: RewardEntity[]) =>
  data.reduce((total: number, el) => total + +el.reward, 0);

export const selectAllRewards = createSelector(selectRewards, (rewards) => rewards.all);
export const selectMyRewards = createSelector(selectRewards, (rewards) => rewards.my);
export const selectRewardsLoading = createSelector(selectRewards, (rewards) => rewards.loading);
export const selectTotalMyRewards = createSelector(selectRewards, (rewards) =>
  getTotalSum(rewards.my)
);
export const selectTotalGiveRewards = createSelector(
  selectRewards,
  selectProfileData,
  (rewards: RewardsStore, profile: UserEntity) => {
    const giveRewards = profile
      ? rewards.all.filter((el: RewardEntity) => el.userBy.id === profile.id)
      : [];
    return getTotalSum(giveRewards);
  }
);
