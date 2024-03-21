import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from "@/redux/submissionSlice";

const store = configureStore({
  reducer: {
    submission: submissionReducer,
  },
});

export default store;
