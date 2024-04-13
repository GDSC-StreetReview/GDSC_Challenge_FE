import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RequestStreetData } from "../constants/interface";

const apiUrl = process.env.REACT_APP_BASE_URL;
// 좌표로 주변 거리 조회
const useGetStreetDetail = () => {
  const navigate = useNavigate();
  const [streetDetail, setStreetDetail] = useState<RequestStreetData | null>(
    null
  );
  const accessToken = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const getStreetDetail = async (x: string, y: string): Promise<void> => {
    const PostData = {
      x: x,
      y: y,
    };
    try {
      const response = await axios.post(
        `${apiUrl}/street/view`,
        PostData,
        config
      );
      console.log(response);
      if (response.data.statusCode === 200) {
        setStreetDetail(response.data.data);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return { getStreetDetail, streetDetail };
};

export default useGetStreetDetail;
