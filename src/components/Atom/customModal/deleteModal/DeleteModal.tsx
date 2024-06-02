import { useNavigate } from "react-router-dom";
import { useDeleteReview } from "src/hook/useDeleteReview";
import CustomModal from "../CustomModal";
import "./DeleteModal.css";

interface DeleteProp {
  target: string; // 거리, 리뷰, 댓글
  targetId: number;
  onClose: () => void;
}
const DeleteModal = ({ onClose, targetId, target }: DeleteProp) => {
  const navigate = useNavigate();
  const { handleDeleteReview } = useDeleteReview();
  const handleDelete = () => {
    handleDeleteReview(targetId.toString());
     navigate("/");
    onClose();
  };
  return (
    <>
      <CustomModal
        title={`${target} 삭제`}
        content={`${target}를 삭제하시겠습니까?`}
        onClick={handleDelete}
        onClose={onClose}
      />
    </>
  );
};
export default DeleteModal;
