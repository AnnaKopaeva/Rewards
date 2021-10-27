import { createAsyncThunk } from "@reduxjs/toolkit";
import { RewardEntity } from "../../interfaces/RewardEntity";

import rewards from "../../mockedData/rewards";

const FETCH_REWARDS = "rewards/fetch";
const FETCH_REWARDS_BY_USER = "rewards/fetchByUser";

export const fetchRewards = createAsyncThunk<RewardEntity[]>(FETCH_REWARDS, () => rewards);

export const fetchRewardsByUser = createAsyncThunk<RewardEntity[], number>(
  FETCH_REWARDS_BY_USER,
  (id) => rewards.filter((el) => el.user.id === id)
);
