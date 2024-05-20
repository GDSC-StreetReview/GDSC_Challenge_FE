import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "src/store/auth/authAction";
import CustomModal from "../CustomModal";
import "./LogoutModal.css";

interface logoutProp {
  onClose: () => void;
}
const LogoutModal = ({ onClose }: logoutProp) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    //   localStorage.removeItem("token");
    localStorage.clear();
    dispatch(logout());
    navigate("/");
    onClose();
    window.location.reload();
  };
  return (
    <>
      <CustomModal
        title="로그아웃"
        content="로그아웃 하시겠습니까?"
        onClick={handleLogout}
        onClose={onClose}
      />
    </>
  );
};
export default LogoutModal;
