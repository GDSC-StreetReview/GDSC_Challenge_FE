import MainToggle from "src/components/Main/components/MainToggle";
import TopSearchBar from "src/components/Main/components/TopSearchBar";

const MainPage = () => {
  // const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  // const handleIsOpenSideBar = () => {
  //   setIsOpenSideBar((prer) => !prer);
  // };
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
