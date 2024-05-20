import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageModal } from "src/components/Atom/ImageModal/ImageModal";
import { BackgroundImg } from "src/components/Atom/backgroundImg/BackgroundImg";
import CommentBox from "src/components/Atom/commentBox/CommentBox";
import { Text } from "src/components/Atom/text/Text";
import { IMAGES } from "src/constants/images";
import { StoreState } from "src/constants/interface";
import useFetchComment from "src/hook/useFetchComment";
import useGetCommentList from "src/hook/useGetCommentList";
import { contentItem } from "./BoardItem";
import "./BoardItemDetail.css";

const BoardItemDetail = ({ streetItem, reviewItem, onClose }: contentItem) => {
  const [comment, setComment] = useState<string>("");
  const { commentList, getCommentList } = useGetCommentList(
    reviewItem.reviewId
  );
  const { fetchComment } = useFetchComment();
  const { coordinates } = useSelector((state: StoreState) => state.map); //현재위치 정보

  useEffect(() => {
    getCommentList(reviewItem.reviewId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetchCommentData = async () => {
    const commentItem = {
      reviewId: reviewItem.reviewId,
      replyPhoto: "",
      replyContent: comment,
      reviewX: reviewItem.reviewX,
      reviewY: reviewItem.reviewY,
      myX: coordinates.lat ?? 0,
      myY: coordinates.lng ?? 0,
    };
    await fetchComment({ comment: commentItem });
    setComment("");
    getCommentList(reviewItem.reviewId);
  };
  return (
    <section className="board-item-detail-wrapper">
      <div>
        {reviewItem.photoList ? (
          <ImageModal imageList={reviewItem.photoList} />
        ) : (
          <img src={IMAGES.basicImg} alt="img" />
        )}
      </div>
      <div>
        <div>
          <div className="board-item-detail-user-info-box">
            <BackgroundImg
              img={reviewItem.member.picture}
              className="board-item-detail-user-info-profile"
            />
            {/* 닫기 위치 정하기 */}
            <div className="board-item-detail-user-info-mid-box">
              <Text color="#000" fontSize="1.25rem" fontWeight="700">
                {reviewItem.member.nickName}
              </Text>
              <Text
                color="#000"
                fontSize="0.625rem"
                fontWeight="400"
                className="board-item-detail-like"
              >
                좋아요 {reviewItem.likey}
              </Text>
            </div>
            <img
              onClick={onClose}
              src={IMAGES.report}
              alt="report"
              className="board-item-detail-user-info-mid-box-report"
            />
          </div>
          <div className="board-item-detail-content-box">
            {/* 내용 */}
            <div className="board-item-detail-text-content-box">
              <Text color="#000" fontWeight="400" fontSize="0.75rem">
                {reviewItem.content && reviewItem.content.replace(/\\n/g, "\n")}
              </Text>
              <div className="board-item-detail-tag-box">
                {streetItem.tagsList.map((item, idx) => (
                  <Text
                    key={idx}
                    color="#378CE7"
                    fontSize="0.75rem"
                    fontWeight="400"
                  >
                    #{item.value}
                  </Text>
                ))}
              </div>
            </div>
            {/* 댓글 리스트 */}
            <div className="board-item-detail-comment-box">
              {commentList?.map((item, index) => (
                <React.Fragment key={index}>
                  <CommentBox commentItem={item} />
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* 댓글 입력창 */}
          <div className="comment-input-wrapper">
            <div className="comment-input-box">
              <input
                className="comment-input"
                value={comment} // 입력값 상태로 설정
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="댓글 쓰기..."
              />
              <div onClick={handleFetchCommentData}>
                <Text
                  color="#939393"
                  fontSize="0.75rem"
                  fontWeight="400"
                  className="comment-input-enter"
                >
                  enter
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BoardItemDetail;
