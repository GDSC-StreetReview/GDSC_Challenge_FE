import { useState } from "react";
import commonApis from "src/utils/commonApis";
import { ReviewDetail } from "../constants/interface";

const useGetReviewDetail = () => {
  const [reviewDetailArr, setReviewDetailArr] = useState<ReviewDetail[] | null>(
    null
  );
  const getReviewDetail = async (x: string, y: string): Promise<void> => {
    try {
      const res = await commonApis.post(`/reviews/all`, { x, y });
      if (res.data.statusCode === 200) {
        setReviewDetailArr(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getReviewDetail, reviewDetailArr };
};

export default useGetReviewDetail;
