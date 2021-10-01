import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	rewards: [],
	myRewards: [],
	loading: false,
}

const userSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			state.users = action.payload;
			state.loading = true;
			state.error = false;
		},
		getRewards: (state, action) => {
			state.rewards = action.payload;
			state.loading = false;
		},
		getMyRewards: (state, action) => {
			state.myRewards = action.payload;
			state.loading = false;
		},
		createRewards: (state, action) => {
			state.rewards = action.payload.filter((el) => el);
			state.myRewards = action.payload.filter((el) => el);
			state.loading = false;
		},
	},
});
export const { getUsers, getRewards, getMyRewards, createRewards } = userSlice.actions;
export default userSlice.reducer;
