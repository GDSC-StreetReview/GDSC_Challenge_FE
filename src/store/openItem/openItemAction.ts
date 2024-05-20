export const ITEM_OPENED = "ITEM_OPENED";
export const ITEM_CLOSE = "ITEM_CLOSE";

export interface itemAction {
  type: string;
  payload: number;
}
export const openItemAction = (reviewId: number) => ({
  type: ITEM_OPENED,
  payload: reviewId,
});
export const closeItemAction = () => ({
  type: ITEM_CLOSE,
  payload: null,
});
