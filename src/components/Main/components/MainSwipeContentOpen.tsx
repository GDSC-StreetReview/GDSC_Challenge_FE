import React from "react";
import { MainSwipeContentOpenProps } from "../constants/Interface";
import { MainContentItem } from "./MainContentItem";
import "./MainSwipeContentOpen.css";

const MainSwipeContentOpen = ({
  streetImg,
  streetName,
  reviewList,
}: MainSwipeContentOpenProps) => {
  return (
    <div className="swipe-menu-wrapper">
      <div className="swipe-menu-wrapper-top">
        {streetImg && (
          <div className="swipe-menu-wrapper-top-image">{streetImg}</div>
        )}
        <div className="swipe-menu-review-title-box">
          <span>{streetName}</span>
          <div className="swipe-menu-review-mapping-title">
            {/* {address} */}
          </div>
        </div>
      </div>
      {/* 리뷰 목록이 들어갈 곳 */}
      <div className="swipe-menu-wrapper-bottom">
        {reviewList.map((item, index) => (
          <React.Fragment key={index}>
            <MainContentItem content={item.title} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default MainSwipeContentOpen;
