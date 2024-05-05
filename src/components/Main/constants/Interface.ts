export interface ReviewItem {
  title: string;
}
export interface MainSwipeContentOpenProps {
  streetImg?: string;
  streetName: string;
  reviewList: ReviewItem[]; // 리뷰 항목이 제목 속성을 갖는 객체의 배열
}
