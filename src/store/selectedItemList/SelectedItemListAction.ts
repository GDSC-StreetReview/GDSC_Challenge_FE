import { RequestStreetData } from "src/constants/interface";

export const setSelectedMarker = (marker: RequestStreetData | null) => ({
  type: "SET_SELECTED_MARKER",
  payload: marker,
});
