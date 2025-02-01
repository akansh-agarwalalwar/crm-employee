import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "./UserSlice";
import authReducer from "./Auth";

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
});

export default rootReducer;
