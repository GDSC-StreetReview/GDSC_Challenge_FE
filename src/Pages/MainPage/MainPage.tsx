import { useState } from "react";
import MainToggle from "../../components/Main/MainToggle/MainToggle";
import TopSearchBar from "../../components/Main/TopSearchBar/TopSearchBar";
const MainPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const handleIsOpenSideBar = () => {
    setIsOpenSideBar((prer) => !prer);
  };
  return (
    <>
      <TopSearchBar />
      {/* 세로 스와이프 화면 */}
      {/* <MainSwipeContent
        isOpenSideBar={isOpenSideBar}
        handleIsOpenSideBar={handleIsOpenSideBar}
      /> */}
      {/* <BoardItem /> */}
      <MainToggle />
    </>
  );
};

export default MainPage;
