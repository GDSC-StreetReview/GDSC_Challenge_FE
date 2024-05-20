import { useEffect } from "react";
import { RequestStreetData } from "src/constants/interface";
import useGetReviewDetail from "src/hook/useGetReviewDetail";
import "./MainSwipeContent.css";
import MainSwipeContentOpen from "./MainSwipeContentOpen";
interface MainSwipeContentProps {
  item: RequestStreetData;
  isOpenSideBar: boolean;
  handleIsOpenSideBar: () => void;
}
const MainSwipeContent: React.FC<MainSwipeContentProps> = ({
  item,
  isOpenSideBar,
  handleIsOpenSideBar,
}) => {
  const swipeWrapperStyle: React.CSSProperties = {
    height: isOpenSideBar ? `60vh` : `3rem`,
    transition: "height 0.5s ease",
  };
  const { reviewDetailArr, getReviewDetail } = useGetReviewDetail();
  useEffect(() => {
    getReviewDetail(String(item.x), String(item.y));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <div className="swipe-container">
      <div className="swipe-wrapper" style={swipeWrapperStyle}>
        <div className="drag-icon" onClick={handleIsOpenSideBar} />
        {isOpenSideBar &&
          (reviewDetailArr ? (
            <MainSwipeContentOpen
              streetInfo={item || ""}
              reviewList={reviewDetailArr}
            />
          ) : (
            ""
          ))}
      </div>
    </div>
  );
};

export default MainSwipeContent;
