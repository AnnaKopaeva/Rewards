import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

export const getUsersSelector = (state: AppState) => state.users;

export const getUserProfileSelector = createSelector(getUsersSelector, (users) => users.profile);
export const getUsersDataSelector = createSelector(getUsersSelector, (users) => users.data);
export const getUsersLoadingSelector = createSelector(getUsersSelector, (users) => users.loading);
export const getUsersErrorSelector = createSelector(getUsersSelector, (users) => users.error);
