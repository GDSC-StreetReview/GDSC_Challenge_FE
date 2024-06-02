import { useState } from "react";
import commonApis from "src/utils/commonApis";

// 이것도 바꾸기
const useGetUserLikeToReview = () => {
  const [like, setLike] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const getUserLikeToReview = async (reviewId: number) => {
    setIsLoading(true);
    try {
      const response = await commonApis.get(`reviews/isLike/${reviewId}`);
      if (response.data.statusCode === 200) {
        setLike(response.data.data);
      } else {
        throw new Error("좋아요 실패");
      }
    } catch (error) {
      console.error("좋아요 실패", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { like, isLoading, getUserLikeToReview };
};
export default useGetUserLikeToReview;
