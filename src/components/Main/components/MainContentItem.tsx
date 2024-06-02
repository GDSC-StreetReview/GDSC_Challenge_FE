import { useState } from "react";
import { useDispatch } from "react-redux";
import { BackgroundImg } from "src/components/Atom/backgroundImg/BackgroundImg";
import { Text } from "src/components/Atom/text/Text";
import BoardItem from "src/components/Board/components/BoardItem";
import BoardItemDetail from "src/components/Board/components/BoradItemDetail";
import { IMAGES } from "src/constants/images";
import { RequestStreetData, ReviewDetail } from "src/constants/interface";
import {
  closeItemAction,
  openItemAction,
} from "src/store/openItem/openItemAction";
import "./MainContentItem.css";

interface contentItem {
  reviewItem: ReviewDetail;
  streetItem: RequestStreetData;
}
export const MainContentItem = ({ reviewItem, streetItem }: contentItem) => {
  const targetId = reviewItem.reviewId;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const handleOnClick = () => {
    if (reviewItem.content !== "삭제된 리뷰입니다.") {
      dispatch(openItemAction(targetId));
      setIsOpen(true);
    } 
  };
  const handleOnClose = () => {
    setIsOpen(false);
    setIsDetail(false);
    dispatch(closeItemAction());
  };
  const handleOpenDetail = () => {
    setIsDetail(true);
    dispatch(openItemAction(targetId));
  };
  const handleBackgroundClick = (e:any) => {
    if (e.target === e.currentTarget) {
      handleOnClose();
    }
  };
  return (
    <>
      <BackgroundImg
        img={reviewItem.photoList?.[0] || IMAGES.basicImg}
        className="swipe-menu-wrapper-bottom-wrapper"
        onClick={handleOnClick}
      >
        <div className="swipe-menu-wrapper-bottom-content">
          <Text color="#000" fontSize="0.9375rem">
            {reviewItem.content}
          </Text>
        </div>
        <div className="swipe-menu-wrapper-bottom-user-info">
          <Text color="#000" fontSize="0.75rem">
            {reviewItem.member.nickName}
          </Text>
          <img src={IMAGES.gallery} alt="gallery" />
        </div>
      </BackgroundImg>
      {isOpen && (
        <div className="board-item-backgournd" onClick={handleBackgroundClick}>
          {!isDetail ? (
            <BoardItem
              streetItem={streetItem}
              reviewItem={reviewItem}
              onClick={handleOpenDetail}
              onClose={handleOnClose}
            />
          ) : (
            <BoardItemDetail
              streetItem={streetItem}
              reviewItem={reviewItem}
            />
          )}
        </div>
      )}
    </>
  );
};
