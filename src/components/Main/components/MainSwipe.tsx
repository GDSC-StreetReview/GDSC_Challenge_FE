import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RequestStreetData } from "src/constants/interface";
import useGetReviewDetail from "src/hook/useGetReviewDetail";
import { RootState } from "src/store/rootReducer";
import "./MainSwipeContent.css";
import MainSwipeContentOpen from "./MainSwipeContentOpen";
interface MainSwipeContentProps {
  item: RequestStreetData;
  handleIsOpenSideBar: () => void;
}
const MainSwipeContent: React.FC<MainSwipeContentProps> = ({
  item,
  handleIsOpenSideBar,
}) => {
  const { isSwipe } = useSelector((state: RootState) => state.swipe);
  const swipeWrapperStyle: React.CSSProperties = {
    height: isSwipe ? `60vh` : `0rem`,
    transition: "height 0.5s ease",
  };
  const { reviewDetailArr, getReviewDetail } = useGetReviewDetail();
  useEffect(() => {
    if (isSwipe) {
      getReviewDetail(String(item.x), String(item.y));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSwipe, item]);

  return (
    <div className="swipe-container">
      <div className="swipe-wrapper" style={swipeWrapperStyle}>
        <div className="drag-icon" onClick={handleIsOpenSideBar} />
        {isSwipe &&
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
