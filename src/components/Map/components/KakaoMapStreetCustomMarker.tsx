import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "src/components/Atom/text/Text";
import MainSwipeContent from "src/components/Main/components/MainSwipe";
import { RootState } from "src/store/rootReducer";
import {
  swipeStateCloseAction,
  swipeStateOpenAction,
} from "src/store/swipeState/swipeStateAction";
import { IMAGES } from "../../../constants/images";
import { RequestStreetData } from "../../../constants/interface";
import "./KakaoMapStreetCustomMarker.css";
interface KakaoMapCustomOverlayProps {
  item: RequestStreetData;
  onClick: () => void;
}

export const KakaoMapStreetCustomMarker = ({
  item,
  onClick,
}: KakaoMapCustomOverlayProps) => {
  const dispatch = useDispatch();
  const { isSwipe } = useSelector((state: RootState) => state.swipe);
  const { selectItemList } = useSelector(
    (state: RootState) => state.selectedMarker
  );
  const handleOpenStreetRivewList = () => {
    if (!isSwipe) dispatch(swipeStateOpenAction());
    else dispatch(swipeStateCloseAction());
  };
  const bottomSwipeStyle: React.CSSProperties = {
    opacity: isSwipe ? 1 : 0,
    transition: "opacity 0.1s ease",
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
      {selectItemList === item && (
        <CustomOverlayMap
          position={{ lat: item.x, lng: item.y }}
          clickable={true}
        >
          <div className="custom-overlay-box">
            {/* 커스텀 오버레이 내용 */}
            <div >
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
        {selectItemList && (
          <MainSwipeContent
            item={selectItemList}
            handleIsOpenSideBar={handleOpenStreetRivewList}
          />
        )}
      </div>
    </>
  );
};
