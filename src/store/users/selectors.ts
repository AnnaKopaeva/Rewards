import { AppState } from "../rootReducer";

export const getUsersSelector = (state: AppState) => state.users;
export const getUsersDataSelector = (state: AppState) => getUsersSelector(state).data;
export const getUsersLoadingSelector = (state: AppState) => getUsersSelector(state).loading;
export const getUsersErrorSelector = (state: AppState) => getUsersSelector(state).error;
