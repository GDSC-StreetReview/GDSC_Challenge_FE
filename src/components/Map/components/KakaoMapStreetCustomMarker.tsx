import { useState } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { Text } from "src/components/Atom/text/Text";
import MainSwipeContent from "src/components/Main/components/MainSwipe";
import { IMAGES } from "../../../constants/images";
import { RequestStreetData } from "../../../constants/interface";
import "./KakaoMapStreetCustomMarker.css";
interface KakaoMapCustomOverlayProps {
  item: RequestStreetData;
  selectedMarker: RequestStreetData | null;
  onClick: () => void;
  onClose: () => void;
}

export const KakaoMapStreetCustomMarker = ({
  item,
  selectedMarker,
  onClick,
  onClose,
}: KakaoMapCustomOverlayProps) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const handleOpenStreetRivewList = () => {
    setIsOpenSideBar((prer) => !prer);
    console.log("dkddkd");
  };
  const bottomSwipeStyle: React.CSSProperties = {
    opacity: isOpenSideBar ? 1 : 0,
    transition: "opacity 0.1s ease",
    // display: isOpenSideBar ? "block" : "none",
  };
  return (
    <>
      <MapMarker
        title={item.streetName}
        position={{ lat: item.x, lng: item.y }}
        image={{
          src:
            item.photoList?.[0] ??
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // null | undefined방지
            size: { width: 24, height: 35 },
        }}
        zIndex={1}
        clickable={true}
        onClick={onClick} // 클릭 이벤트 핸들러 등록
      />
      {selectedMarker === item && (
        <CustomOverlayMap
          position={{ lat: item.x, lng: item.y }}
          clickable={true}
        >
          <div className="custom-overlay-box">
            {/* 커스텀 오버레이 내용 */}
            <div onClick={onClose}>
              <Text
                color="#89bbf1"
                fontSize="1rem"
                fontWeight="700"
                className="custom-overlay-box-close"
              >
                x
              </Text>
            </div>
            <div
              className="custom-overlay-box-title-wrapper overlay-content"
              onClick={handleOpenStreetRivewList}
            >
              <Text color="#89bbf1" fontSize="1rem" fontWeight="700">
                {item.streetName}
              </Text>
            </div>

            <div
              className="custom-overlay-box-icon-wrapper"
              onClick={handleOpenStreetRivewList}
            >
              <img
                className="custom-overlay-box-icon"
                src={IMAGES.heartColor}
                alt="heart"
              />
              {item.likey}
              <img
                className="custom-overlay-box-icon"
                src={IMAGES.commentBlack}
                alt="comment"
              />
              {item.reviewCount}
            </div>

            <div className="custom-overlay-box-tag-list">
              {item.tagsList.map((tag, index) => (
                <div key={index} style={{ marginRight: "0.1rem" }}>
                  <Text color="#378CE7">#{tag.value}</Text>
                </div>
              ))}
            </div>
          </div>
        </CustomOverlayMap>
      )}
      <div style={bottomSwipeStyle}>
        <MainSwipeContent
          item={item}
          isOpenSideBar={isOpenSideBar}
          handleIsOpenSideBar={handleOpenStreetRivewList}
        />
      </div>
    </>
  );
};
