import { takeLatest } from "redux-saga/effects";

import { fetchDataSaga } from "./users/saga";
import { getRewardsSaga, createRewardsSaga } from "./rewards/saga";

import { getUsers } from "./users/reducers";
import { getRewards, createRewards } from "./rewards/reducers";

export default function* rootSaga() {
  yield takeLatest(getUsers.type, fetchDataSaga);
  yield takeLatest(getRewards.type, getRewardsSaga);
  yield takeLatest(createRewards.type, createRewardsSaga);
}
