import { ReactComponent as IconHeart } from "../../../assets/images/ic_heartWhite.svg";
import { IMAGES } from "../../../constants/images";
import { BoardContentText, BoardTitleText } from "./BoardText";
import * as W from "./styleBoardItem";
const IconStyle: React.CSSProperties = {
  width: "1.5625rem",
  marginTop: "0.81rem",
};
const lacationIconStyle: React.CSSProperties = {
  width: "0.9375rem",
  height: "1.25rem",
  marginRight: "0.19rem",
};
const moreIconStyle: React.CSSProperties = {
  width: "2.1875rem",
  height: "2.1875rem",
};
const textArr = {
  title: "한남동 핫플 카페",
  content:
    "로제도 다녀간 이번주 핫 한 카페임당 모두들 아인슈페너 시키시기를....        또간집에서 여기 나오면 나 이제 못가.. 다들 그러기전에 얼른ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  tag: ["한남동", "카페", "블랙핑크"],
  address: "마포구 마포대로 181 1층 구띠커피와인하우스",
};
const BoardItem = () => {
  const MAX_CONTENT_LENGTH = 100;
  const truncatedContent =
    textArr.content.length > MAX_CONTENT_LENGTH
      ? textArr.content.slice(0, MAX_CONTENT_LENGTH) + "  ...더보기"
      : textArr.content;
  return (
    <W.BoardItemBackGournd>
      <W.BoardItemBackBox background={IMAGES.groupColorBlue}>
        <W.BoardItemTop>
          <img src={IMAGES.moreLeft} alt="more" style={moreIconStyle} />
        </W.BoardItemTop>
        <W.BoardItemBottom>
          <W.BoardItemContentBox>
            <BoardTitleText title={textArr.title} />
            <BoardContentText content={truncatedContent} />
          </W.BoardItemContentBox>
          <W.BoardItemMenuBox>
            <IconHeart fill="#DFF5FF" stroke="#DFF5FF" style={IconStyle} />
            <img src={IMAGES.addLocation} alt="add" style={IconStyle} />
            <img src={IMAGES.myCommentWhite} alt="comment" style={IconStyle} />
          </W.BoardItemMenuBox>
        </W.BoardItemBottom>
        <W.BoardItemBottomInfo>
          <W.BoardItemTagBox>
            {textArr.tag.map((idx, item) => (
              <BoardContentText key={idx} content={`#${item}`} />
            ))}
          </W.BoardItemTagBox>
          <W.BoardItemAddreessBox>
            <img
              src={IMAGES.location}
              alt="location"
              style={lacationIconStyle}
            />
            <BoardContentText content={textArr.address} />
          </W.BoardItemAddreessBox>
          <W.BoardItemUserInfoBox>
            <W.BoardItemUserInfoProflie proflie={IMAGES.myCommentWhite} />
            <W.BoardItemUserInfoName>rkdgml</W.BoardItemUserInfoName>
          </W.BoardItemUserInfoBox>
        </W.BoardItemBottomInfo>
      </W.BoardItemBackBox>
    </W.BoardItemBackGournd>
  );
};
export default BoardItem;
