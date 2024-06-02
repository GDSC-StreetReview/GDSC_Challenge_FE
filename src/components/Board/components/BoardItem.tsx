import { useEffect } from "react";
import { BackgroundImg } from "src/components/Atom/backgroundImg/BackgroundImg";
import { Text } from "src/components/Atom/text/Text";
import { IMAGES } from "src/constants/images";
import { RequestStreetData, ReviewDetail } from "src/constants/interface";
import useGetUserLikeToReview from "src/hook/useGetUserLikeToReview";
import { useLikeReview } from "src/hook/useLikeReview";
import { TruncatedContent } from "src/utils/TruncatedContent";
import { ReactComponent as IconHeart } from "../../../assets/images/ic_heartWhite.svg";
import { MAX_CONTENT_LENGTH } from "../constants/Constants";
import "./BoardItem.css";
const IconStyle: React.CSSProperties = {
  width: "1.5625rem",
  marginTop: "0.81rem",
};
const lacationIconStyle: React.CSSProperties = {
  width: "0.9375rem",
  height: "1.25rem",
  marginRight: "0.19rem",
};
export interface contentItem {
  reviewItem: ReviewDetail;
  streetItem: RequestStreetData;
  onClick?: () => void;
  onClose?: () => void;
}
const BoardItem = ({
  streetItem,
  reviewItem,
  onClick,
  onClose,
}: contentItem) => {
  const { like, getUserLikeToReview } = useGetUserLikeToReview();
  const content = TruncatedContent({
    maxContentLength: MAX_CONTENT_LENGTH,
    content: reviewItem.content,
  });
  const { handleLikeReview } = useLikeReview();
  const handleLikeClick = () => {
    handleLikeReview(reviewItem.reviewId);
  };
  // getUserLikeToReview
  useEffect(() => {
    getUserLikeToReview(reviewItem.reviewId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <BackgroundImg
        img={reviewItem.photoList?.[0] || IMAGES.basicColorImg}
        className="board-item-back-box"
      >
        <div className="board-item-back-box-front" />
        <div className="board-item-top">
          <img src={IMAGES.moreLeft} alt="back" onClick={onClose} />
        </div>
        <div className="board-item-bottom">
          <div className="board-item-content-box" onClick={onClick}>
            <Text fontWeight="700">{streetItem.streetName}</Text>
            <Text fontWeight="400">{content}</Text>
          </div>
          <div className="board-item-menu-box">
            <IconHeart
              fill={like ? "#DFF5FF" : "#FFF"}
              stroke="#DFF5FF"
              style={IconStyle}
              onClick={handleLikeClick}
            />
            <img src={IMAGES.addLocation} alt="add" style={IconStyle} />
            <img src={IMAGES.myCommentWhite} alt="comment" style={IconStyle} />
          </div>
        </div>
        <div className="board-item-box-bottom-info">
          <div className="board-item-tag-box">
            {streetItem.tagsList.map((item, idx) => (
              <Text key={idx} fontWeight="400">
                #{item.value}
              </Text>
            ))}
          </div>
          <div className="board-item-address-box">
            <img
              src={IMAGES.location}
              alt="location"
              style={lacationIconStyle}
            />
            <Text fontWeight="400">{streetItem.streetAddress}</Text>
          </div>
          <div className="board-item-user-info-box">
            <BackgroundImg
              img={reviewItem.member.picture}
              className="board-item-user-info-profile "
            />
            <Text
              fontSize="1.25rem"
              fontWeight="700"
              className="board-item-user-info-name"
            >
              {reviewItem.member.nickName}
            </Text>
          </div>
        </div>
      </BackgroundImg>
    </>
  );
};
export default BoardItem;
