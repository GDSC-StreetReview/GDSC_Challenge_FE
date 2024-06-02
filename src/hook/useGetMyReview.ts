import { useEffect, useState } from "react";
import commonApis from "src/utils/commonApis";
interface Review {
  reviewId: number;
  reviewX: number;
  reviewY: number;
  content: string;
  likey: number;
  createdDate: string;
  updatedDate: string;
  member: Member;
  photoList: string[]; // 혹은 다른 타입으로 변경할 수 있습니다.
}
interface Member {
  memberId: number;
  providerId: string;
  email: string;
  nickName: string;
  picture: string;
}

export const useGetMyReview = () => {
  const [loading, setLoading] = useState(true);
  const [myReview, setMyReview] = useState<Review[]>([]);
  useEffect(() => {
    const fetchMyReviewData = async () => {
      try {
        const res = await commonApis.get("/mypage/review");
        setMyReview(res.data.data);
      } catch (error) {
        console.log("Street data error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyReviewData();
  }, []);
  return { loading, myReview };
};
