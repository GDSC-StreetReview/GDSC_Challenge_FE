import { Text } from "../text/Text";
import "./CustomModal.css";
interface CoustomModalProps {
  title: string;
  content: string;
  onClick: () => void;
  onClose: () => void;
}
const CustomModal = ({
  title,
  content,
  onClick,
  onClose,
}: CoustomModalProps) => {
  return (
    <div className="custom-modal-wrapper">
      <div className="custom-modal-box">
        <Text color="#EA4335" fontSize="1.25rem" fontWeight="700"className="custom-modal-title">
          {title}
        </Text>
        <Text color="#000" fontSize="0.75rem" fontWeight="500" className="custom-modal-box-content">
          {content}
        </Text>
        <div className="custom-modal-box-buttom">
          <div onClick={onClick} className="custom-modal-box-yes">
            <Text color="#fff" fontSize="0.75rem" fontWeight="500">
              예
            </Text>
          </div>
          <div onClick={onClose} className="custom-modal-box-no">
            <Text color="#000" fontSize="0.75rem" fontWeight="500">
              아니요
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomModal;
