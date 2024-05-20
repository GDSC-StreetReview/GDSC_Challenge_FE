import { useSelector } from "react-redux";
import commonApis from "src/utils/commonApis";
import { Coordinates, StoreState } from "../constants/interface";
import useUploadImg, { uploadType } from "./useUploadImg";

// 리뷰 작성 훅
export const useFetchReview = () => {
  const { postUploadImg } = useUploadImg();
  const { coordinates } = useSelector((state: StoreState) => state.map); //현재위치 정보

  const writeReview = async (
    coords: Coordinates,
    postContent: string,
    imgs: File[]
  ) => {
    const postData = {
      content: postContent,
      reviewX: coords.lat, //streetX
      reviewY: coords.lng,
      myX: coordinates.lat,
      myY: coordinates.lng,
    };
    try {
      const res = await commonApis.post("/reviews/write", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      if (res.data.statusCode === 200 && imgs.length > 0) {
        await postUploadImg(uploadType.review, res.data.data.reviewId, imgs);
        console.log("성공");
      } else if (res.data.statusCode === 200) console.log("성공");
    } catch (error) {
      console.log("Error fetching reviews : ", error);
      throw error;
    }
  };
  return { writeReview };
};
