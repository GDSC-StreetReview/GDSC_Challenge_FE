import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { MapState, RequestStreetData } from "../../constants/interface";
import useGeolocation from "../../hook/useGeolocation";
import useGetAllStreetList from "../../hook/useGetAllStreetList";
import useSearchAddressFromCoords from "../../hook/useSearchAddressFromCoords";
import { setAddress } from "../../redux/Mapactions";
import {
  KakaoMapCustomCurrentPosition,
  KakaoMapStreetCustomMarker,
} from "./components/index";
// 사용자의 위치를 기본으로 하는 카카오 맵
function KakaoMaps() {
  const location = useGeolocation();
  // const streetList = useGetStreetList();
  const streetList = useGetAllStreetList();
  const [map, setMap] = useState<MapState>(); // map 상태를 useState를 통해 관리
  const address = useSearchAddressFromCoords(map?.center);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      location.coordinates !== undefined &&
      location.coordinates.lat !== null &&
      location.coordinates.lng !== null
    ) {
      setMap({
        center: {
          lat: location.coordinates.lat,
          lng: location.coordinates.lng,
        },
        level: 2,
      });
      console.log(map);
      if (address) {
        dispatch(setAddress(address));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  const [selectedMarker, setSelectedMarker] =
    useState<RequestStreetData | null>(null);
    const handleMarkerClick = (item: RequestStreetData) => {
      setSelectedMarker(item);
    };
  
    const handleCloseMarker = () => {
      setSelectedMarker(null);
  };
  
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {map && (
        <Map
          center={map.center}
          level={map.level}
          style={{ width: "100%", height: "100%" }}
          draggable={true}
          scrollwheel={true}
          maxLevel={1} // 지도 확대 최댓값
          minLevel={4} //지도 축소 최댓값
        >
          {/* 사용자의 현재 위치를 마커로 표시 */}
          {streetList.map((item, idx) => (
            <>
              <KakaoMapStreetCustomMarker
                key={idx}
                item={item}
                selectedMarker={selectedMarker}
                onClick={() => handleMarkerClick(item)}
                onClose={() => handleCloseMarker()}
              />
            </>
          ))}

          {/* 사용자의 현재 위치를 마커로 표시 */}
          <KakaoMapCustomCurrentPosition map={map} />
        </Map>
      )}
    </div>
  );
}

export default KakaoMaps;
