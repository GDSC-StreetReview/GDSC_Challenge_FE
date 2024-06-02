import { Text } from "src/components/Atom/text/Text";
import { IMAGES } from "src/constants/images";
import { Member } from "src/constants/interface";
import { formatDate } from "src/utils/formatDate";
import "./MypageItemBox.css";

interface myPageItemBoxProps {
  content: string;
  createdDate: string;
  likey: number;
  photoList: string[];
  member?: Member;
}
export const MypageItemBox = ({
  content,
  createdDate,
  likey,
  photoList,
  member,
}: myPageItemBoxProps) => {
  return (
    <>
      <div className="mypage-item-box">
        <div className="mypage-item-box-left">
          {member && (
            <div className="mypage-item-box-writer-box">
              <img src={member.picture} alt="profile" />
              <Text color="#000" fontSize="1rem" fontWeight="600">
                {member.nickName}
              </Text>
            </div>
          )}
          <Text color="#000" fontSize="1rem" fontWeight="600">
            {content}
          </Text>
          <div className="mypage-item-box-left-bottom">
            <Text color="#989898" fontSize="0.6875rem" fontWeight="500">
              {formatDate(createdDate)}
            </Text>

            <div className="mypage-item-box-comment-box">
              <img src={IMAGES.heartColor} alt="comment" />
              <Text color="#000" fontSize="0.6875rem" fontWeight="500">
                {likey}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="mypage-item-box-img-box">
      {photoList[0] !== undefined && photoList.length > 0 && (
        <img src={encodeURI(photoList[0])} alt="img" />
      )}
      </div>
    </>
  );
};
