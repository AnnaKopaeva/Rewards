import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./reducers";

export default configureStore({
	reducer: {
		main: mainSlice,
	},
});