import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomSelect from "src/components/Atom/customSelect/CustomSelect";
import { Text } from "src/components/Atom/text/Text";
import { IMAGES } from "src/constants/images";
import { MypageLikeReview } from "./MypageLikeReview";
import { MypageReplyBox } from "./MypageReplyBox";
import { MypageReviewBox } from "./MypageReviewBox";
import { MypageSecession } from "./MypageSecession";
import "./MypageSwipe.css";
export const MypageSwipe = () => {
  const navigater = useNavigate();
  const options = ["내 리뷰", "내 댓글", "좋아요한 리뷰", "탈퇴하기"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const handleHome = () => {
    navigater("/");
  };
  return (
    <div className="mypage-swipe-wrapper">
      <div className="mypage-swipe-content">
        <div className="mypage-swipe-toggle">
          <img src={IMAGES.homeIcon} alt="home" onClick={handleHome} />
          <CustomSelect
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div>
          <Text color="#000">{selectedOption}</Text>
        </div>
        {selectedOption === options[0] && ( //내 리뷰
          <div className="mypage-swipe-content-box">
            <MypageReviewBox />
          </div>
        )}
        {selectedOption === options[1] && ( // 내 댓글
          <div className="mypage-swipe-content-box">
            <MypageReplyBox />
          </div>
        )}
        {selectedOption === options[2] && ( // 좋아요한 리뷰
          <div className="mypage-swipe-content-box">
            <MypageLikeReview />
          </div>
        )}
        {selectedOption === options[3] && <MypageSecession />}
      </div>
    </div>
  );
};
