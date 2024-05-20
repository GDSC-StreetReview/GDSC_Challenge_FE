import commonApis from "src/utils/commonApis";

interface fetchCommentProps {
  reviewId: number;
  replyPhoto?: string | string[];
  replyContent: string;
  reviewX: number;
  reviewY: number;
  myX: number;
  myY: number;
}
const useFetchComment = () => {
  const fetchComment = async ({
    comment,
  }: {
    comment: fetchCommentProps;
  }) => {
    try {
      const res = await commonApis.post(`/reply/write`, {
        reviewId: comment.reviewId,
        replyPhoto: comment.replyPhoto,
        replyContent: comment.replyContent,
        reviewX: comment.reviewX,
        reviewY: comment.reviewY,
        myX: comment.myX,
        myY: comment.myY,
      });
      if (res.data) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchComment };
};
export default useFetchComment;
