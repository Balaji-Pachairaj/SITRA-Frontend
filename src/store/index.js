import { configureStore } from "@reduxjs/toolkit";
import masterSlice from "./masterSlice";

const store = configureStore({
     reducer: {
          master: masterSlice.reducer,
     },
});

export default store;
