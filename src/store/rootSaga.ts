import { takeLatest } from "redux-saga/effects";

import { fetchDataSaga } from "./users/saga";
import { getRewardsSaga } from "./rewards/saga";

import { getUsers } from "./users/reducers";
import { getRewards } from "./rewards/reducers";

export default function* rootSaga() {
  yield takeLatest(getUsers.type, fetchDataSaga);
  yield takeLatest(getRewards.type, getRewardsSaga);
}
