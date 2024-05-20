import React, { useState } from "react";
import { Text } from "src/components/Atom/text/Text";
import WriteModal from "src/components/Atom/writeModal/WriteModal";
import { MainSwipeContentOpenProps } from "../constants/Interface";
import { MainContentItem } from "./MainContentItem";
import "./MainSwipeContentOpen.css";

const MainSwipeContentOpen = ({
  streetInfo,
  reviewList,
}: MainSwipeContentOpenProps) => {
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const handleWriteReview = () => {
    setOpenModal(true);
  };
  const handleCloseWriteReview = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="swipe-menu-wrapper">
        <div className="swipe-menu-wrapper-top">
          {streetInfo.photoList === undefined && (
            <img className="swipe-menu-wrapper-top-image" src={encodeURI(streetInfo.photoList[0])} alt=""/>
          )}
          <div className="swipe-menu-review-title-box">
            <span>{streetInfo.streetName}</span>
          </div>
          <div className="swipe-menu-write-review" onClick={handleWriteReview}>
            <Text color="#fff" fontSize="0.75rem" fontWeight="700">
              리뷰 작성
            </Text>
          </div>
        </div>
        {/* 리뷰 목록이 들어갈 곳 */}
        <div className="swipe-menu-wrapper-bottom">
          {reviewList.map((item) => (
            <React.Fragment key={item.reviewId}>
              <MainContentItem reviewItem={item} streetItem={streetInfo} />
            </React.Fragment>
          ))}
        </div>
      </div>
      {openModal && (
        <div>
          <WriteModal
            onClose={handleCloseWriteReview}
            writeTypeProp="REVIEW"
            streetDatas={{ lat: streetInfo.x, lng: streetInfo.y }}
          />
        </div>
      )}
    </>
  );
};
export default MainSwipeContentOpen;
