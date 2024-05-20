import { ITEM_CLOSE, ITEM_OPENED } from "./openItemAction";

export interface ItemState {
  isOpen: boolean;
  itemId: number | null;
}
const initialState: ItemState = {
  isOpen: false,
  itemId: null,
};

export const openItemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ITEM_OPENED:
      return {
        ...state,
        isOpen: true,
        itemId: action.payload,
      };
    case ITEM_CLOSE:
      return {
        ...state,
        isOpen: false,
        itemId: action.payload,
      };
    default:
      return state;
  }
};
