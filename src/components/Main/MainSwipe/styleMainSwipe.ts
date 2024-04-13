import styled from "styled-components";

export const SwipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  width: 100%;
`;
export const SwipeWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;

  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? `60vh` : `3rem;`)};
  background-color: #fff;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: height 0.5s ease;
`;

// 매핑되는 리뷰
export const SwipeMenuReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
// 사이드 창 열었을 때, 내부
export const SwipeMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2.19rem;
  margin-left: 2.69rem;
  margin-right: 2.69rem;
`;
export const SwipeMenuWrapperTop = styled.div`
  display: flex;
  align-items: center;
`;
// 거리 이미지 들어갈 곳
export const SwipeMenuWrapperTopImage = styled.div`
  margin-right: 0.94rem;
  width: 3.6875rem;
  height: 3.6875rem;
  background: #89bbf1;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SwipeMenuReviewTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  color: #89bbf1;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const SwipeMenuReviewMappingTitle = styled.span`
  color: #d9d9d9;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const DragIcon = styled.div`
  position: absolute;
  top: 0.88rem;
  left: 50%;
  width: 2.1875rem;
  height: 0.3125rem;
  border-radius: 1.25rem;
  background: #89bbf1;
  cursor: pointer;
  z-index: 2;
`;

export const SwipeMenuWrapperBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.12rem 2.19rem;
  margin-top: 1.12rem;
`;
export const SwipeMenuWrapperBottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border-radius: 0.625rem;
`;
