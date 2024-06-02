import { RequestStreetData } from "../../constants/interface";

interface ItemState {
  selectItemList: RequestStreetData | null;
}
const initialState: ItemState = {
  selectItemList: null,
};
const selectedMarkerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SELECTED_MARKER":
      return { ...state, selectItemList: action.payload };
    default:
      return state;
  }
};

export default selectedMarkerReducer;
