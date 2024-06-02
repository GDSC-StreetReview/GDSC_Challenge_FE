import { useNavigate } from "react-router-dom";
import { useReportReview } from "src/hook/useReportReview";
import CustomModal from "../CustomModal";

interface ReportProp {
  target: string; // 거리, 리뷰, 댓글
  targetId: number;
  onClose: () => void;
}
const ReportModal = ({ onClose, targetId, target }: ReportProp) => {
  const navigate = useNavigate();
  const { handleReportReview } = useReportReview();
  const handleDelete = () => {
    handleReportReview(targetId.toString());
    navigate("/");
    onClose();
  };
  return (
    <>
      <CustomModal
        title={`${target} 신고`}
        content={`${target}를 신고하시겠습니까?`}
        onClick={handleDelete}
        onClose={onClose}
      />
    </>
  );
};
export default ReportModal;
