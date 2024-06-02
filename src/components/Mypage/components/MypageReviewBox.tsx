import React from "react";
import { useGetMyReview } from "src/hook/useGetMyReview";
import { MypageItemBox } from "./MypageItemBox";
export const MypageReviewBox = () => {
  const { loading, myReview } = useGetMyReview();
  return (
    <>
      {!loading &&
        myReview.map((review, idx) => (
          <React.Fragment key={idx}>
            <MypageItemBox
              content={review.content}
              createdDate={review.createdDate}
              likey={review.likey}
              photoList={review.photoList}
            />
          </React.Fragment>
        ))}
    </>
  );
};
