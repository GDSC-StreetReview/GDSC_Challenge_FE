import commonApis from "../utils/commonApis";
export const useLikeReview = () => {
  const handleLikeReview = async (reviewId: number) => {
    try {
      const res = await commonApis.post(`/reviews/${reviewId}/like`);
      console.log(res);
    } catch (error: any) {
      const errorLog = error.response.data;
      if (errorLog.statusCode === 400) {
        window.alert(errorLog.message);
      }
    }
  };
  return { handleLikeReview };
};
