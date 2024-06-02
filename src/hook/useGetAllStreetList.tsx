import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";
import { RequestStreetData } from "../constants/interface";
import commonApis from "../utils/commonApis";

const useGetAllStreetList = () => {
  const [loading, setLoading] = useState(true);
  const [streetAllList, setStreetAllList] = useState<RequestStreetData[]>([]);
  const { isSwipe } = useSelector((state: RootState) => state.swipe);
  useEffect(() => {
    const fetchStreetData = async () => {
      try {
        const res = await commonApis.post("/street/all/view");
        setStreetAllList(res.data.data);
      } catch (error) {
        console.log("Street data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStreetData();
  }, [isSwipe]);

  return { streetAllList, loading };
};

export default useGetAllStreetList;
