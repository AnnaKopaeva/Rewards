import { createSlice } from "@reduxjs/toolkit";

import { UserEntity } from "../../interfaces/UserEntity";
import { ErrorEntity } from "../../interfaces/ErrorEntity";

export interface UsersStore {
  profile: UserEntity;
  data: UserEntity[];
  loading: boolean;
  error: ErrorEntity;
}

const initialState: UsersStore = {
  profile: null,
  data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state: UsersStore) => {
      state.loading = true;
    },
    setUsers: (state: UsersStore, action) => {
      state.data = action.payload;
      [state.profile] = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUsersFailed: (state: UsersStore, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsers, setUsers, getUsersFailed } = userSlice.actions;

export default userSlice.reducer;
