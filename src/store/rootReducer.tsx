import { combineReducers } from "@reduxjs/toolkit";
import MapReducer from "../redux/Mapreducer";
import authReducer from "./auth/authReducer";
import menuSlice from "./menuSelector/reducer";
import { openItemReducer } from "./openItem/openItemReducer";
import selectedMarkerReducer from "./selectedItemList/SelectedItemListReducer";
import { swipeStateReducer } from "./swipeState/swipeStateReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  map: MapReducer,
  menu: menuSlice,
  open: openItemReducer,
  selectedMarker: selectedMarkerReducer,
  swipe: swipeStateReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
