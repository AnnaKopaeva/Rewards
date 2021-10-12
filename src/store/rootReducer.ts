import { combineReducers } from "@reduxjs/toolkit";

import usersReducer, { UsersStore } from "./users/reducers";
import rewardsReducer, { RewardsStore } from "./rewards/reducers";

export interface AppState {
  users: UsersStore;
  rewards: RewardsStore;
}

const reducer = combineReducers<AppState>({
  users: usersReducer,
  rewards: rewardsReducer,
});

export default reducer;
