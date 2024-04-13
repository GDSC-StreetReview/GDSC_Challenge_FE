import axios from "axios";
import { useEffect, useState } from "react";
import { RequestStreetData } from "../constants/interface";

const useGetStreetList = () => {
  const accessToken = localStorage.getItem("token");
  const [streetList, setStreetList] = useState<RequestStreetData[]>([]);

  useEffect(() => {
    const fetchStreetData = async () => {
      try {
        const res = await axios.post(
          "/street/near/view",
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setStreetList(res.data.data);
      } catch (error) {
        console.log("Street data error:", error);
      }
    };

    fetchStreetData();
  }, [accessToken]);

  return streetList;
};

export default useGetStreetList;
