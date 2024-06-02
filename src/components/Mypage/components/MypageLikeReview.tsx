import React from "react";
import { useGetMyLikeReview } from "src/hook/useGetMyLikeReview";
import { MypageItemBox } from "./MypageItemBox";
export const MypageLikeReview = () => {
  const { loading, myLikeReview } = useGetMyLikeReview();
  return (
    <>
      {!loading &&
        myLikeReview.map((review, idx) => (
          <React.Fragment key={idx}>
            <MypageItemBox
              content={review.content}
              createdDate={review.createdDate}
              likey={review.likey}
              photoList={review.photoList}
              member={review.member}
            />
          </React.Fragment>
        ))}
    </>
  );
};
