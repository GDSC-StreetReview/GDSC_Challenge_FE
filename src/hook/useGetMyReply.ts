import { useEffect, useState } from "react";
import commonApis from "src/utils/commonApis";
interface Reply {
    replyId: number;
    replyContent: string;
    photoList: string[];
    replyLikey: number;
    member: Member;
    createDate: string;
    updateDate: string;
  }
interface Member {
  memberId: number;
  providerId: string;
  email: string;
  nickName: string;
  picture: string;
}

export const useGetMyReply = () => {
  const [loading, setLoading] = useState(true);
  const [myReply, setMyReply] = useState<Reply[]>([]);
  useEffect(() => {
    const fetchMyReplyData = async () => {
      try {
        const res = await commonApis.get("/mypage/reply");
        setMyReply(res.data.data);
      } catch (error) {
        console.log("Street data error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyReplyData();
  }, []);
  return { loading, myReply };
};
