import React from "react";
import { useGetMyReply } from "src/hook/useGetMyReply";
import { MypageItemBox } from "./MypageItemBox";
export const MypageReplyBox = () => {
  const { loading, myReply } = useGetMyReply();
  return (
    <>
      {!loading &&
        myReply.map((reply, idx) => (
          <React.Fragment key={idx}>
            <MypageItemBox
              content={reply.replyContent}
              createdDate={reply.createDate}
              likey={reply.replyLikey}
              photoList={reply.photoList}
            />
          </React.Fragment>
        ))}
    </>
  );
};
