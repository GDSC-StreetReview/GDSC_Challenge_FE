import { useEffect, useState } from "react";
import { IMAGES } from "../../../constants/images";
import handleLogin from "../../Login/handleLogin";
import TopSideToggle from "../../TopSideToggle/TopSideToggle";
import * as W from "./styleMainToggle";
const MainToggle = () => {
  const accessToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [clickMenu, setClickMenu] = useState<boolean>(false);
  console.log(accessToken);

  const handleMenuClick = () => {
    setClickMenu((prev) => !prev);
  };
  useEffect(() => {
    if (accessToken) {
      //   message.success("로그인에 성공했습니다!");
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken]);
  return (
    //   오른쪽 끝 메뉴
    <W.MenuContainer>
      <W.MenuCircle isClick={(clickMenu && !isLogin)}>
        {!clickMenu ? (
          <W.MenuCircleImgStyled
            onClick={handleMenuClick}
            src={IMAGES.groupColorBlue}
            alt="loginIcon"
          />
        ) : !isLogin ? (
          <W.MenuLoginWapper>
            <W.GoogleLoginButton
              src={IMAGES.GoogleLogin}
              alt="loginbotton"
              onClick={handleLogin}
            />
            <W.MenuCircleImgStyled
              src={IMAGES.groupColorWhite}
              onClick={handleMenuClick}
              alt="loginIcon"
            />
          </W.MenuLoginWapper>
        ) : (
          isLogin && (
            <W.MenuCircleImgStyled
              onClick={handleMenuClick}
              src={IMAGES.groupColorBlue}
              alt="loginIcon"
            />
          )
        )}
      </W.MenuCircle>
      {isLogin && clickMenu && <TopSideToggle />}
    </W.MenuContainer>
  );
};

export default MainToggle;
