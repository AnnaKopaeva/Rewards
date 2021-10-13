import { put, select } from "redux-saga/effects";

import { getUserProfileSelector } from "../users/selectors";
import rewards from "../../mockedData/rewards";

import { getRewards, setRewards, getRewardsFailed } from "./reducers";
import { UserEntity } from "../../interfaces/UserEntity";

const findUser = (data: UserEntity[], userId: number) => data.find((user) => user.id === userId);

export function* getRewardsSaga(action: ReturnType<typeof getRewards>) {
  try {
    const data: UserEntity[] = action.payload;
    const profile: UserEntity = yield select(getUserProfileSelector);

    const result = rewards.map((reward) => ({
      ...reward,
      user: findUser(data, reward.userId),
      userBy: findUser(data, reward.userById),
    }));
    const myRewards = result.filter((el) => el.userId === profile.id);

    yield put(setRewards({ all: result, my: myRewards }));
  } catch (e) {
    yield put(getRewardsFailed(e));
  }
}
