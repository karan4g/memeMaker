import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
// import commonReducer from "./reducers/index";
import Common from "./reducers/Common";

export const store = configureStore({
  reducer: {
    meme:Common,
  }
});
