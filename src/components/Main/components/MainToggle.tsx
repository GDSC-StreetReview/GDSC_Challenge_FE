import { useState } from "react";
import MainToggleIcon from "src/components/Atom/mainToggleIcon/MainToggleIcon";
import TopSideToggle from "src/components/Atom/topSideToggle/TopSideToggle";
import { IMAGES } from "src/constants/images";
import handleLogin from "../../Login/handleLogin";
import "./MainToggle.css";
const MainToggle = () => {
  // const accessToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [clickMenu, setClickMenu] = useState<boolean>(false);
  let isClick = clickMenu && !isLogin;

  const handleMenuClick = () => {
    setClickMenu((prev) => !prev);
  };
  // useEffect(() => {
  //   if (accessToken) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, [accessToken]);

  const instyle: React.CSSProperties = {
    width: isClick ? "13.75rem" : "3.375rem",
    height: isClick ? "3.6875rem" : "3.375rem",
    borderRadius: isClick ? "2.5rem" : "3.375rem",
    background: isClick ? "#378ce7" : "#fff",
    transition: "background 0.2s ease-in-out, width 0.3s ease-in-out",
  };

  return (
    //   오른쪽 끝 메뉴
    <div className="menu-container">
      <div className="menu-circle" style={instyle}>
        {!clickMenu ? (
          <MainToggleIcon
            onClick={handleMenuClick}
            imgSrc={IMAGES.groupColorBlue}
          />
        ) : !isLogin ? (
          <div className="menu-login-wrapper">
            <MainToggleIcon
              clasName="google-login-button"
              onClick={handleLogin}
              imgSrc={IMAGES.GoogleLogin}
            />
            <MainToggleIcon
              onClick={handleMenuClick}
              imgSrc={IMAGES.groupColorWhite}
            />
          </div>
        ) : (
          isLogin && (
            <MainToggleIcon
              onClick={handleMenuClick}
              imgSrc={IMAGES.groupColorBlue}
            />
          )
        )}
      </div>
      {isLogin && clickMenu && <TopSideToggle />}
    </div>
  );
};

export default MainToggle;
