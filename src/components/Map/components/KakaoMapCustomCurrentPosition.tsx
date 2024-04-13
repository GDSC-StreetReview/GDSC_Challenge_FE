import { Circle, MapMarker } from "react-kakao-maps-sdk";
import { IMAGES } from "../../../constants/images";
import { MapState } from "../../../constants/interface";
interface KakaoMapCustomOverlayProps {
  map: MapState;
}

export const KakaoMapCustomCurrentPosition = ({
  map,
}: KakaoMapCustomOverlayProps) => {
  return (
    <>
      <MapMarker
        title="현 위치"
        position={map.center}
        zIndex={1}
        image={{
          src: IMAGES.mylocation,
          size: {
            width: 20,
            height: 20,
          },
        }}
      />
      {/* 사용자의 위치를 중심으로 100m 반경의 원을 표시 */}
      <Circle
        center={map.center}
        radius={100}
        fillColor={"#89BBF1"}
        fillOpacity={0.43}
        strokeWeight={5}
        strokeOpacity={0}
        // strokeStyle={"none"}
      />
    </>
  );
};
