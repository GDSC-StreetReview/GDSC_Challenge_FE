import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PagePath from "src/constants/PagePath";
import LogoutModal from "../customModal/logoutModal/LogoutModal";
import { Text } from "../text/Text";
import WriteModal from "../writeModal/WriteModal";
import "./TopSideToggle.css";
import { MypageArr } from "./constants";

const TopSideToggle = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState(location.pathname);
  useEffect(() => {
    setSelectedIcon(location.pathname);
  }, [location.pathname]); //주소 변경마다 업데이트
  const navigate = useNavigate();
  const [openLogoutModal, setOpenLogoutModal] = useState<boolean>(false);
  const [openStreetModal, setOpenStreetModal] = useState<boolean>(false);
  const logoutClick = () => {
    setOpenLogoutModal(true);
  };
  const handlelogoutClose = () => {
    setOpenLogoutModal(false);
  };
  const handleOpenFetchStreet = () => {
    setOpenStreetModal(true);
  };
  const handleCloseFetchStreet = () => {
    setOpenStreetModal(false);
  };
  const handleMypage = () => {
    navigate("/mypage");
  };
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
    const topSideToggleIconWrapperStyle: React.CSSProperties = {
      background: selectedIcon.startsWith(path) ? "#5356FF" : "#89BBF1",
    };
    const topSideToggleIconImgStyle: React.CSSProperties = {
      width: `${width}rem`,
      height: `${height}rem`,
      marginLeft: "0.9rem",
    };
    const handleOnClick = () => {
      switch (path) {
        case PagePath.Mypage:
          handleMypage();
          break;
        case PagePath.logout:
          logoutClick();
          break;
        case PagePath.Request:
          handleOpenFetchStreet();
          break;
        default:
          console.error("Unhandled path: ", path);
      }
    };

    return (
      <div
        className="top-side-toggle-icon"
        style={topSideToggleIconWrapperStyle}
        onClick={handleOnClick}
      >
        <img
          style={topSideToggleIconImgStyle} // 스타일 속성을 설정합니다.
          src={img}
          alt={alt}
        />
        <Text
          color="#fff"
          fontSize="0.75rem"
          fontWeight="700"
          className="top-side-toggle-icon-text"
        >
          {alt}
        </Text>
      </div>
    );
  };

  return (
    <>
      <div className="top-side-toggle-wrapper">
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
        {openLogoutModal && <LogoutModal onClose={handlelogoutClose} />}
        {openStreetModal && (
          <WriteModal writeTypeProp="STREET" onClose={handleCloseFetchStreet} />
        )}
      </div>
    </>
  );
};

export default TopSideToggle;
