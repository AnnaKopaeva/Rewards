import { put, select } from "redux-saga/effects";

import { getUserProfileSelector } from "../users/selectors";
import rewards from "../../mockedData/rewards";

import {
  setRewards,
  getRewardsFailed,
  createRewards,
  updateRewards,
  updateMyRewards,
} from "./reducers";
import { UserEntity } from "../../interfaces/UserEntity";

export function* getRewardsSaga() {
  try {
    const profile: UserEntity = yield select(getUserProfileSelector);
    const myRewards = rewards.filter((el) => el.user.id === profile.id);

    yield put(setRewards({ all: rewards, my: myRewards }));
  } catch (e) {
    yield put(getRewardsFailed(e));
  }
}

export function* createRewardsSaga(action: ReturnType<typeof createRewards>) {
  try {
    const data = action.payload;
    const profile: UserEntity = yield select(getUserProfileSelector);

    const id = Date.now();
    const time = new Date().toLocaleString();
    const result = { ...data, id, time, userBy: profile };

    yield put(updateRewards(result));

    if (data.user.id === profile.id) {
      yield put(updateMyRewards(result));
    }
  } catch (e) {
    yield put(getRewardsFailed(e));
  }
}
