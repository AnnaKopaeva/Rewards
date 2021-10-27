import { put, select } from "redux-saga/effects";

import { selectUserProfile } from "../users/selectors";
import rewards from "../../mockedData/rewards";
import { UserEntity } from "../../interfaces/UserEntity";

import {
  setRewards,
  getRewardsFailed,
  createRewards,
  updateRewards,
  updateMyRewards,
} from "./reducers";

export function* getRewardsSaga() {
  try {
    const profile: UserEntity = yield select(selectUserProfile);
    const myRewards = rewards.filter((el) => el.user.id === profile.id);

    yield put(setRewards({ all: rewards, my: myRewards }));
  } catch (e) {
    yield put(getRewardsFailed(e));
  }
}

export function* createRewardsSaga(action: ReturnType<typeof createRewards>) {
  try {
    const data = action.payload;
    const profile: UserEntity = yield select(selectUserProfile);

    const id = Date.now();
    const time = new Date().toLocaleString();
    const result = { ...data, reward: +data.reward, id, time, userBy: profile };

    yield put(updateRewards(result));

    if (data.user.id === profile.id) {
      // when rewards create for current user, update my rewards
      yield put(updateMyRewards(result));
    }
  } catch (e) {
    yield put(getRewardsFailed(e));
  }
}
