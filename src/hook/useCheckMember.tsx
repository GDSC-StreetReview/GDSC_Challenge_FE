import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_BASE_URL;
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const useCheckMember = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const handleCheckMember = async () => {
    try {
      const response = await axios.get(`${apiUrl}/member/m/manager`, config);
      console.log(response);
      if (response.data.statusCode === 200) {
        navigate("/request/place");
      }
    } catch (error) {
      // 에러처리
      if (axios.isAxiosError(error)) {
        const err = error.response?.data.code;
        if (err === 400) {
          if (isMobile) {
            // message.error("로그인 후 이용해 주세요.");
            navigate("/");
          } else {
            window.alert("로그인 후 이용해 주세요.");
            navigate("/");
          }
        } else {
          if (isMobile) {
            // message.error("권한이 없습니다.");
            navigate("/");
          } else {
            window.alert("권한이 없습니다.");
            navigate("/");
          }
        }
      }
      }
    };
    return { handleCheckMember };
};
export default useCheckMember;
