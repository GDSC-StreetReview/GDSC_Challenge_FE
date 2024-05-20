import { useEffect, useState } from "react";
import { RequestStreetData } from "../constants/interface";
import commonApis from "../utils/commonApis";

const useGetStreetList = () => {
  const [streetList, setStreetList] = useState<RequestStreetData[]>([]);

  useEffect(() => {
    const fetchStreetData = async () => {
      try {
        const res = await commonApis.post("/street/near/view");
        setStreetList(res.data.data);
      } catch (error) {
        console.log("Street data error:", error);
      }
    };

    fetchStreetData();
  }, []);

  return streetList;
};

export default useGetStreetList;
