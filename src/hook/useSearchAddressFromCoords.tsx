import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Coordinates } from "../constants/interface";

// 좌표를 이용하여 행정동 주소 정보를 검색하는 함수 정의
const useSearchAddressFromCoords = (
  coords: Coordinates | undefined
): string | null => {
  const dispatch = useDispatch();
  const [address, setAAddress] = useState<string | null>(null);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    if (coords && coords.lat !== null && coords.lng !== null) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(
        coords.lng,
        coords.lat,
        (
          result: kakao.maps.services.RegionCode[],
          status: kakao.maps.services.Status
        ) => {
          if (status === kakao.maps.services.Status.OK && result.length > 0) {
            const region = result[0];
            setAAddress(region.address_name);
            // dispatch(setAddress(region.address_name));
            // console.log("ddkdk",region.address_name);
          } else {
            setAAddress(null); // 주소를 찾을 수 없는 경우 null로 설정
          }
        }
      );
    } else {
      setAAddress(null); // 유효하지 않은 좌표인 경우 null로 설정
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);
  return address;
};

export default useSearchAddressFromCoords;
