import { configureStore } from "@reduxjs/toolkit";
import userSlicer from './user';

const store = configureStore({
  reducer: {
    user:userSlicer                                                                                                                                                                                                                                                                                                                                                                                                                                 
  },
});
export default store;