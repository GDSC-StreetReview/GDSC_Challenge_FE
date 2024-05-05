import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RequestStreetData } from "../constants/interface";
import commonApis from "../utils/commonApis";

const useGetStreetDetail = () => {
  const navigate = useNavigate();
  const [streetDetail, setStreetDetail] = useState<RequestStreetData | null>(
    null
  );

  const getStreetDetail = async (x: string, y: string): Promise<void> => {
    try {
      const response = await commonApis.post("/street/view", { x, y });
      if (response.data.statusCode === 200) {
        setStreetDetail(response.data.data);
      }
    } catch (error) {
      console.log("Street detail error:", error);
      navigate("/");
    }
  };

  return { getStreetDetail, streetDetail };
};

export default useGetStreetDetail;
