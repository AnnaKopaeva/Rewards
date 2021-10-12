import { put } from "redux-saga/effects";

import { getRewards, getRewardsFailed } from "./reducers";

export function* getRewardsSaga() {
  try {
    const data: any[] = [];
    yield put(getRewards(data));
  } catch (e) {
    yield put(getRewardsFailed(e));
  }
}
