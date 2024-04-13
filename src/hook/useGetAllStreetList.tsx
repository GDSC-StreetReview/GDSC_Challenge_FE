import axios from "axios";
import { useEffect, useState } from "react";
import { RequestStreetData } from "../constants/interface";

const useGetAllStreetList = () => {
  const accessToken = localStorage.getItem("token");
  const [streetAllList, setStreetAllList] = useState<RequestStreetData[]>([]);

  useEffect(() => {
    const fetchStreetData = async () => {
      try {
        const res = await axios.post(
          "/street/all/view",
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setStreetAllList(res.data.data);
      } catch (error) {
        console.log("Street data error:", error);
      }
    };

    fetchStreetData();
  }, [accessToken]);

  return streetAllList;
};

export default useGetAllStreetList;
