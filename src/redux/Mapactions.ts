import {
  Coordinates,
  SET_ADDRESS,
  SET_COORDINATES,
} from "../constants/interface";

export const setAddress = (address: string) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setCoordinates = (coordinates: Coordinates) => ({
  type: SET_COORDINATES,
  payload: coordinates,
});
