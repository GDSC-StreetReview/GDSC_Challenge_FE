import { useState } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "src/constants/interface";
import commonApis from "src/utils/commonApis";
import useUploadImg, { uploadType } from "./useUploadImg";
interface Tag {
  value?: string;
}
const useFetchStreet = () => {
  const { coordinates, address } = useSelector((state: StoreState) => state.map); //현재위치 정보
  const [isLoading, setIsLoading] = useState(false);
  const { postUploadImg } = useUploadImg();
  const writeStreet = async (
    streetName: string,
    tagList: Tag[],
    imgs: File[]
  ) => {
    setIsLoading(true);
    try {
      const res = await commonApis.post(`/street/registration`, {
        streetAddress: address,
        streetName: streetName,
        x: coordinates.lat,
        y: coordinates.lng,
        tagList: tagList.map((tag) => ({ value: tag.value })),
      });
      if (res.data.statusCode === 200 && imgs.length > 0) {
        await postUploadImg(uploadType.street, res.data.data.streetId, imgs);
        console.log("성공");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, writeStreet };
};
export default useFetchStreet;
