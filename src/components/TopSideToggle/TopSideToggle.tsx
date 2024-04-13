import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PagePath from "../../constants/PagePath";
import { IMAGES } from "../../constants/images";
import * as W from "./stlyeTopSideToggle";

const TopSideToggle = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState(location.pathname);
  useEffect(() => {
    setSelectedIcon(location.pathname);
  }, [location.pathname]); //주소 변경마다 업데이트
  const navigate = useNavigate();

  type TopSideToggleIconProp = {
    path: string;
    img: string;
    alt: string;
    height: number;
    width: number;
  };
  const TopSideToggleIcon = ({
    path,
    img,
    alt,
    height,
    width,
  }: TopSideToggleIconProp) => {
    return (
      <W.TopSideToggleIconWrapper
        isStay={selectedIcon.startsWith(path)}
        onClick={() => navigate(path)}
      >
        <W.TopSideToggleIconImg
          isHeight={height}
          isWidth={width}
          src={img}
          alt={alt}
        />
        <W.TopSideToggleIconText>{alt}</W.TopSideToggleIconText>
      </W.TopSideToggleIconWrapper>
    );
  };
  const MypageArr = [
    {
      path: PagePath.MypageRivew,
      img: IMAGES.myReviewWhite,
      alt: "내 리뷰",
      height: 1.1875,
      width: 1.196,
    },
    {
      path: PagePath.MypageMycomment,
      img: IMAGES.myCommentWhite,
      alt: "내 댓글",
      height: 1.24063,
      width: 1.3125,
    },
    {
      path: PagePath.MypageLikecomment,
      img: IMAGES.myHeartWhite,
      alt: "좋아요",
      height: 1.25,
      width: 1.23263,
    },
    {
      path: PagePath.MypageUserSecession,
      img: IMAGES.myRemveWhite,
      alt: "탈퇴하기",
      height: 1.0625,
      width: 1.0625,
    },
  ];

  return (
    <W.TopSideToggleWrapper>
      {MypageArr.map((item, index) => (
        <TopSideToggleIcon
          key={index}
          path={item.path}
          img={item.img}
          alt={item.alt}
          height={item.height}
          width={item.width}
        />
      ))}
    </W.TopSideToggleWrapper>
  );
};

export default TopSideToggle;
