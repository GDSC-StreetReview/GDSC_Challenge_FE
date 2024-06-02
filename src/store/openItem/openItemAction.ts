export const ITEM_OPENED = "ITEM_OPENED";
export const ITEM_CLOSE = "ITEM_CLOSE";


export const openItemAction = (reviewId: number) => ({
  type: ITEM_OPENED,
  payload: reviewId,
});
export const closeItemAction = () => ({
  type: ITEM_CLOSE,
  payload: null,
});
