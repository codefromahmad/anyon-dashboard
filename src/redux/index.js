import { configureStore } from "@reduxjs/toolkit";
import pageDetail from "./reducers/pageDetail";

// Create the Redux store
const store = configureStore({
  reducer: {
    page: pageDetail,
  },
});

export default store;
