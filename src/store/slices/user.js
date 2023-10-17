import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data:{}
  },
  reducers: {
    Adduser:(state,action)=>{
      state.data=action.payload;
      console.log(state.data)
    }
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;