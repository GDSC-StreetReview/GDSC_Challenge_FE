import { useState } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { IMAGES } from "../../../constants/images";
import { RequestStreetData } from "../../../constants/interface";
import MainSwipeContent from "../../Main/MainSwipe/MainSwipe";
import * as W from "./styleCustomOverlay";
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
          <W.CustomOverlayBox>
            {/* 커스텀 오버레이 내용 */}
            <W.CustomOverlayBoxCloseIcon onClick={onClose}>
              X
            </W.CustomOverlayBoxCloseIcon>
            <W.CustomOverlayBoxTitleWrapper
              className="overlay-content"
              onClick={handleOpenStreetRivewList}
            >
              <W.CustomOverlayBoxTitle>
                {item.streetName}
              </W.CustomOverlayBoxTitle>
              <W.CustomOverlayBoxAddress>
                {item.streetAddress}
              </W.CustomOverlayBoxAddress>
            </W.CustomOverlayBoxTitleWrapper>

            <W.CustomOverlayBoxIconWrapper onClick={handleOpenStreetRivewList}>
              <W.CustomOverlayBoxIcon src={IMAGES.heartColor} alt="heart" />
              {item.likey}
              <W.CustomOverlayBoxIcon src={IMAGES.commentBlack} alt="comment" />
              {item.reviewCount}
            </W.CustomOverlayBoxIconWrapper>

            <W.CustomOverlayBoxTagList>
              {item.tagsList.map((tag, index) => (
                <span key={index} style={{ marginRight: "0.1rem" }}>
                  #{tag.value}
                </span>
              ))}
            </W.CustomOverlayBoxTagList>
          </W.CustomOverlayBox>
        </CustomOverlayMap>
      )}
      <MainSwipeContent
        isOpenSideBar={isOpenSideBar}
        handleIsOpenSideBar={handleOpenStreetRivewList}
      />
    </>
  );
};
