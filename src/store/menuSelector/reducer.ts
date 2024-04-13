import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuState } from "./action";

export const initialState: MenuState = {
  menus: [
    { label: "최신순", isSelected: true, id: 1 },
    { label: "좋아요순", isSelected: false, id: 2 },
  ],
  selectedMenuId: 1,
};

// menuSlice 정의
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // 메뉴 선택 액션
    selectMenu: (state, action: PayloadAction<number>) => {
      const menuId = action.payload;
      state.menus = state.menus.map((menu) =>
        menu.id === menuId
          ? { ...menu, isSelected: true }
          : { ...menu, isSelected: false }
      );
      state.selectedMenuId = menuId;
    },
  },
});

// 액션 생성자 및 리듀서 내보내기
export const { selectMenu } = menuSlice.actions;

export default menuSlice.reducer;
