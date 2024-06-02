import commonApis from "../utils/commonApis";
export const useReportReview = () => {
  const handleReportReview = async (reviewId: string) => {
    try {
      const res = await commonApis.put(`/reviews/report`, {
        reviewId: reviewId,
      });
      console.log(res);
      if (res.data.statusCode === 200) {
        window.alert("신고하였습니다.");
      }
    } catch (error: any) {
      const errorLog = error.response.data;
      if (errorLog.statusCode === 400) {
        window.alert(errorLog.message);
      }
    }
  };
  return { handleReportReview };
};
