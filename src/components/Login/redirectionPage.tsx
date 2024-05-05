import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/auth/authAction";
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const RedirectionPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = async (code: string) => {
    const data = { code };
    console.log("dd", data);
    console.log(REACT_APP_BASE_URL);
    try {
      const res = await axios.post(
        `${REACT_APP_BASE_URL}/member/oauth2/google`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
          },
        }
      );
      if (res.status === 200) {
        console.log("token : ", res.data.data.accessToken);
        localStorage.setItem("token", res.data.data.accessToken);
        dispatch(loginSuccess(res.data.data.accessToken));
        console.log("redux loginSuccess : ", loginSuccess);
        navigate("/");
      } else {
        throw new Error("로그인 실패");
      }
    } catch (error) {
      console.log("error : ", error);
      window.alert("TLqkf");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log("code : ", code);
    if (code) {
      handleAuth(code);
    } else {
      console.log("로그인 재시도하세요.");
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, dispatch]);

  if (loading) {
    return <div>로그인중입니다... 잠시만 기다려주세요!</div>;
  }

  return null;
};

export default RedirectionPage;