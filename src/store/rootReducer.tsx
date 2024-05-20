import { combineReducers } from "@reduxjs/toolkit";
import MapReducer from "../redux/Mapreducer";
import authReducer from "./auth/authReducer";
import menuSlice from "./menuSelector/reducer";
import { openItemReducer } from "./openItem/openItemReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  map: MapReducer,
  menu: menuSlice,
  open: openItemReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
