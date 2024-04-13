import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authAction";
import handleLogin from "./handleLogin";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("token");
  const handleLogoutBtn = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {accessToken ? (
        <button onClick={handleLogoutBtn}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Google Login</button>
      )}
    </>
  );
};

export default Login;
