import { useState } from "react";
import { Comment } from "src/constants/interface";
import commonApis from "src/utils/commonApis";

const useGetCommentList = (reviewId: number) => {
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCommentList = async (reviewId: number) => {
    setIsLoading(true);
    try {
      const response = await commonApis.get(`/reply/${reviewId}`);

      if (response.data.statusCode === 200) {
        setCommentList(response.data.data);
      } else {
        throw new Error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { commentList, isLoading, getCommentList };
};

export default useGetCommentList;
