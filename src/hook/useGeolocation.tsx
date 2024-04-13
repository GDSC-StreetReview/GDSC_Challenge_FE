// 유저의 현 위치를 가져오는 훅

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { locationType } from "../constants/interface";
import { setCoordinates } from "../redux/Mapactions";

const useGeolocation = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: null, lng: null },
  }); //위치 초기 설정
  // 성공 핸들러
  const onSuccess = (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    dispatch(
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    );
  };

  //실패 핸들러
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      maximumAge: 6000, //s
      timeout: 3000, //2s
    }); //초기 위치 정보

    // 자동갱신 5s 필요성은 아직,,?
    // const intervalId = setInterval(() => {
    // navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // }, 5000);
    // return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return location;
};

export default useGeolocation;
