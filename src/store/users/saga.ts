import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import callAPI from "../../helpers/callAPI";
import config from "../../config";

import { setUsers, getUsersFailed } from "./reducers";
import { getRewards } from "../rewards/reducers";

export function* fetchDataSaga() {
  try {
    const result: AxiosResponse = yield call(() => callAPI({ url: config.baseApiUrl }));
    yield put(setUsers(result.data));
    yield put(getRewards());
  } catch (e) {
    yield put(getUsersFailed(e));
  }
}
