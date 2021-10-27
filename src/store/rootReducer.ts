import { combineReducers } from "@reduxjs/toolkit";

import profileReducer, { ProfileStore } from "./profile/reducers";
import usersReducer, { UsersStore } from "./users/reducers";
import rewardsReducer, { RewardsStore } from "./rewards/reducers";

export interface AppState {
  profile: ProfileStore;
  users: UsersStore;
  rewards: RewardsStore;
}

const reducer = combineReducers<AppState>({
  profile: profileReducer,
  users: usersReducer,
  rewards: rewardsReducer,
});

export default reducer;
