import { menuTypes } from "../../constants/interface";

// src/redux/menuTypes.ts
export interface MenuState {
  menus: menuTypes[];
  selectedMenuId: number;
}

export interface MenuAction {
  type: string;
  payload: number;
}

export const SELECT_MENU = "SELECT_MENU";

// 선택된 메뉴 변경 액션 생성자
export const selectMenu = (menuId: number): MenuAction => ({
  type: SELECT_MENU,
  payload: menuId,
});
