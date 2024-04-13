import * as W from "./styleMainSwipe";
interface MainSwipeContentProps {
  isOpenSideBar: boolean;
  handleIsOpenSideBar: () => void;
}
const MainSwipeContent: React.FC<MainSwipeContentProps> = ({
  isOpenSideBar,
  handleIsOpenSideBar,
}) => {
  // const { address } = useSelector((state: State) => state);
  return (
    <W.SwipeContainer>
      <W.SwipeWrapper $isOpen={isOpenSideBar}>
        <W.DragIcon onClick={handleIsOpenSideBar} />
        {isOpenSideBar && (
          <W.SwipeMenuWrapper>
            <W.SwipeMenuWrapperTop>
              <W.SwipeMenuWrapperTopImage>img넣기</W.SwipeMenuWrapperTopImage>
              <W.SwipeMenuReviewTitleBox>
                <span>용리단길</span>
                <W.SwipeMenuReviewMappingTitle>
                  {/* {address} */}
                </W.SwipeMenuReviewMappingTitle>
              </W.SwipeMenuReviewTitleBox>
            </W.SwipeMenuWrapperTop>
            {/* 리뷰 목록이 들어갈 곳 */}
            <W.SwipeMenuWrapperBottom>
              <W.SwipeMenuWrapperBottomContent>
                리뷰 아이템 1
              </W.SwipeMenuWrapperBottomContent>
              <W.SwipeMenuWrapperBottomContent>
                리뷰 아이템 2
              </W.SwipeMenuWrapperBottomContent>
              <W.SwipeMenuWrapperBottomContent>
                리뷰 아이템 3
              </W.SwipeMenuWrapperBottomContent>
              <W.SwipeMenuWrapperBottomContent>
                리뷰 아이템 4
              </W.SwipeMenuWrapperBottomContent>
              <W.SwipeMenuWrapperBottomContent>
                리뷰 아이템 5
              </W.SwipeMenuWrapperBottomContent>
              <W.SwipeMenuWrapperBottomContent>
                리뷰 아이템 6
              </W.SwipeMenuWrapperBottomContent>
              <W.SwipeMenuWrapperBottomContent>
                리뷰 아이템 7
              </W.SwipeMenuWrapperBottomContent>
            </W.SwipeMenuWrapperBottom>
          </W.SwipeMenuWrapper>
        )}
      </W.SwipeWrapper>
    </W.SwipeContainer>
  );
};

export default MainSwipeContent;
