import { TestArr2 } from "../constants/Constants";
import "./MainSwipeContent.css";
import MainSwipeContentOpen from "./MainSwipeContentOpen";
interface MainSwipeContentProps {
  isOpenSideBar: boolean;
  handleIsOpenSideBar: () => void;
}
const MainSwipeContent: React.FC<MainSwipeContentProps> = ({
  isOpenSideBar,
  handleIsOpenSideBar,
}) => {
  const swipeWrapperStyle: React.CSSProperties = {
    height: isOpenSideBar ? `60vh` : `3rem`,
    transition: "height 0.5s ease",
  };
  // const { address } = useSelector((state: State) => state);
  return (
    <div className="swipe-container">
      <div className="swipe-wrapper" style={swipeWrapperStyle}>
        <div className="drag-icon" onClick={handleIsOpenSideBar} />
        {isOpenSideBar && (<MainSwipeContentOpen streetName={"용리단길"} reviewList={TestArr2} />
        )}
      </div>
    </div>
  );
};

export default MainSwipeContent;
