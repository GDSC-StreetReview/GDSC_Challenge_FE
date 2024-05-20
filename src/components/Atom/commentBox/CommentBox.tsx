import { Comment } from "src/constants/interface";
import { BackgroundImg } from "../backgroundImg/BackgroundImg";
import { Text } from "../text/Text";
import "./CommentBox.css";

const CommentBox = ({ commentItem }: { commentItem: Comment }) => {
  return (
    <div className="comment-box-wrapper">
      <div className="comment-box-user-info">
        {commentItem.member.picture && (
          <BackgroundImg
            img={commentItem.member.picture}
            // img={IMAGES.basicColorImg}
            className="comment-box-user-profile"
          />
        )}
        <Text
          color="#000"
          fontSize="0.75rem"
          fontWeight="700"
          className="comment-box-user-name"
        >
          {commentItem.member.nickName}
          {/* 익명 */}
        </Text>
      </div>
      <Text color="#000" fontSize="0.625rem" fontWeight="400">
      {commentItem.replyContent}
      </Text>
    </div>
  );
};
export default CommentBox;
