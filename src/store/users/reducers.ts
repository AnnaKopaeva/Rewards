import { createSlice } from "@reduxjs/toolkit";

export interface UsersStore {
  data: any[];
  loading: boolean;
  error: any;
}

const initialState: UsersStore = {
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
