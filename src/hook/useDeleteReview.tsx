import commonApis from "../utils/commonApis";
// 안되버려..
export const useDeleteReview = () => {
  const handleDeleteReview = async (reviewId: string) => {
    const numericReviewId = parseInt(reviewId, 10);
    try {
      await commonApis.patch(`/reviews/delete/${numericReviewId}`, {
        reviewId: reviewId
      });
    } catch (error: any) {
      console.log(error);
    }
  };
  return { handleDeleteReview };
};
