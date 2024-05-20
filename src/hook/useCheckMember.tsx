import { useNavigate } from "react-router-dom";
import commonApis from "../utils/commonApis";

const useCheckMember = () => {
  const navigate = useNavigate();

  const handleCheckMember = async () => {
    try {
      const response = await commonApis.get("/member/m/manager");
      console.log(response);
      if (response.data.statusCode === 200) {
        navigate("/request/place");
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        handleUnauthorized();
      } else {
        handlePermissionDenied();
      }
    }
  };

  const handleUnauthorized = () => {
    navigate("/");
    window.alert("로그인 후 이용해 주세요.");
  };

  const handlePermissionDenied = () => {
    navigate("/");
    window.alert("권한이 없습니다.");
  };

  return { handleCheckMember };
};

export default useCheckMember;
