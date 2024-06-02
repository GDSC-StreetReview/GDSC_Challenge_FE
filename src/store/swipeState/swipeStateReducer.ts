import { SWIPE_CLOSE, SWIPE_OPENED } from "./swipeStateAction";

export interface ItemState {
  isSwipe: boolean;
}
const initialState: ItemState = {
  isSwipe: false,
};

export const swipeStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SWIPE_OPENED:
      return {
        ...state,
        isSwipe: action.payload
      };
    case SWIPE_CLOSE:
      return {
        ...state,
        isSwipe: false,
      };
    default:
      return state;
  }
};
