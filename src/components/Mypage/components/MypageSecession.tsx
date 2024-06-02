import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "src/components/Atom/text/Text";
import { IMAGES } from "src/constants/images";
import "./MypageSecession.css";
export const MypageSecession = () => {
  const navigater = useNavigate();
  const [secessionState, setSecessionState] = useState<boolean>(false);
  const onCklickCheckbox = () => {
    setSecessionState((prev) => !prev);
  };
  const handleOnSecession = () => {
    if (secessionState) {
      alert("탈퇴요청!");
      navigater("/");
    }
  };
  return (
    <div className="mypage-secession-wrapper">
      <img src={IMAGES.SecessionIcon} alt="Secession" />
      <div className="mypage-secession-check-box">
        <input
          type="checkbox"
          id="secesstionChk"
          name="interest"
          value="secesstionChk"
          onClick={onCklickCheckbox}
        />
        <label htmlFor="secesstionChk">
          <Text color="#000">탈퇴하기 전에 확인해주세요</Text>
        </label>
      </div>
      <div className="mypage-secession-check" onClick={handleOnSecession}>
        <Text color="#fff">탈퇴</Text>
      </div>
    </div>
  );
};
