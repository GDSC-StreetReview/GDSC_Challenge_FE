import { combineReducers } from "@reduxjs/toolkit";
import MapReducer from "../redux/Mapreducer";
import authReducer from "./auth/authReducer";
import menuSlice from "./menuSelector/reducer" 


const rootReducer = combineReducers({
  auth: authReducer,
  map : MapReducer,
  menu : menuSlice,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>