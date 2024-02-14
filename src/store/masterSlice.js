import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     auth: {
          isAuthenticated: false,
          email: "default@email.com",
     },
};

const masterSlice = createSlice({
     name: "Master-state-management",
     initialState,
     reducers: {},
});

export const masterSliceActions = masterSlice.actions;
export default masterSlice;
