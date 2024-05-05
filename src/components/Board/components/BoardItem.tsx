import { BackgroundImg } from "src/components/Atom/backgroundImg/BackgroundImg";
import { Text } from "src/components/Atom/text/Text";
import { TruncatedContent } from "src/utils/TruncatedContent";
import { ReactComponent as IconHeart } from "../../../assets/images/ic_heartWhite.svg";
import { IMAGES } from "../../../constants/images";
import { textArr } from "../constants/Boardtst";
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

const BoardItem = () => {
  const content = TruncatedContent({
    maxContentLength: MAX_CONTENT_LENGTH,
    content: textArr.content,
  });

  return (
    <div className="board-item-backgournd">
      <BackgroundImg
        img={IMAGES.groupColorBlue}
        className="board-item-back-box"
      >
        <div className="board-item-top">
          <img src={IMAGES.moreLeft} alt="more" />
        </div>
        <div className="board-item-bottom">
          <div className="board-item-content-box">
            <Text fontWeight="700">{textArr.title}</Text>
            <Text fontWeight="400">{content}</Text>
          </div>
          <div className="board-item-menu-box">
            <IconHeart fill="#DFF5FF" stroke="#DFF5FF" style={IconStyle} />
            <img src={IMAGES.addLocation} alt="add" style={IconStyle} />
            <img src={IMAGES.myCommentWhite} alt="comment" style={IconStyle} />
          </div>
        </div>
        <div className="board-item-box-bottom-info">
          <div className="board-item-tag-box">
            {textArr.tag.map((idx, item) => (
              <Text key={idx} fontWeight="400">
                #{item}
              </Text>
            ))}
          </div>
          <div className="board-item-address-box">
            <img
              src={IMAGES.location}
              alt="location"
              style={lacationIconStyle}
            />
            <Text fontWeight="400">{textArr.address}</Text>
          </div>
          <div className="board-item-user-info-box">
            <BackgroundImg
              img={IMAGES.myCommentWhite}
              className="board-item-back-box"
            />

            <Text
              fontSize="1.25rem"
              fontWeight="700"
              className="board-item.user-info-name"
            >
              rkdgml
            </Text>
          </div>
        </div>
      </BackgroundImg>
    </div>
  );
};
export default BoardItem;
