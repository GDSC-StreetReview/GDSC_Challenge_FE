import { RequestStreetData, ReviewDetail } from "src/constants/interface";

export interface MainSwipeContentOpenProps {
  streetInfo: RequestStreetData;
  reviewList: ReviewDetail[]; // 리뷰 항목이 제목 속성을 갖는 객체의 배열
}
