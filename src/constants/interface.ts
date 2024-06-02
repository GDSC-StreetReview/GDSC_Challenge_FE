import { Action, AnyAction } from "@reduxjs/toolkit";

export interface Coordinates {
  lat: number | null;
  lng: number | null;
}
export interface locationType {
  loaded: boolean; // 정보를 성공적으로 불러왔는지 여부
  coordinates?: Coordinates; // 좌표 정보 (위도와 경도)
  error?: { code: number; message: string }; // 에러 정보
}

export interface State {
  address: string;
  coordinates: Coordinates;
}
export interface StoreState {
  map: {
    address: string;
    coordinates: Coordinates;
  };
}
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_COORDINATES = "SET_COORDINATES";

interface setAddressAction extends Action<typeof SET_ADDRESS> {
  payload: string;
}

interface SetCoordinatesAction extends Action<typeof SET_COORDINATES> {
  payload: Coordinates;
}

export type ActionTypes = setAddressAction | SetCoordinatesAction | AnyAction;

export interface ArrowProps {
  currentIndex: number;
  maximumItems: number;
  arrayLength?: number;
  onHandler: () => void;
}

export interface GetPostListProps {
  coordinate: Coordinates;
  reviews: Review[];
}

export interface Review {
  reviewId: number;
  streetName: string;
  streetAddress: string;
  reviewCount: number;
  likey: number;
  tagsList: Tag[];
  photoList: string[];
  x: number;
  y: number;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface menuTypes {
  label: string;
  isSelected: boolean;
  id: number;
}

export interface RequestStreet {
  streetName: string;
  streetAddress: string;
  x: number;
  y: number;
  tagList: { value: string }[];
}

// 상세정보
export interface Tag {
  value: string;
}
export interface RequestStreetData {
  streetName: string;
  streetAddress: string;
  x: number;
  y: number;
  reviewCount: number;
  likey: number;
  photoList: string[] | null;
  tagsList: Tag[];
}

export interface ReviewDetail {
  reviewId: number;
  reviewX: number;
  reviewY: number;
  content: string;
  likey?: number;
  createdDate?: string;
  updatedDate?: string;
  member: Member;
  photoList?: string[];
}
export interface Member {
  memberId: number;
  providerId: string;
  email: string;
  nickName: string;
  picture: string;
}
export interface ImgPorpLocationState {
  id: string;
}

export interface MapState {
  center: { lat: number; lng: number };
  level: number;
}

export interface Comment {
  replyId: number;
  replyContent: string;
  photoList: string[];
  replyLikey: number;
  member: {
    memberId: number;
    nickName: string;
    picture: string;
  };
  createDate: string;
  updateDate: string;
}