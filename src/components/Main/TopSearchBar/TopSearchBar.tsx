import { IMAGES } from "../../../constants/images";
import * as W from "./styleTopSearchBar";
const TopSearchBar = () => {
  return (
    // 가로 검색창
    <W.SearchBarContainer>
      <W.SearchBarWrapper>
        <W.SearchBarLogo>TRIPVIWE</W.SearchBarLogo>
        <W.SearchBar
          id="searchKetword"
          type="text"
          placeholder={"어디로 떠나볼까요?"}
        />
        <W.SearchBarImg src={IMAGES.searchIcon} alt="돋보기" />
      </W.SearchBarWrapper>
    </W.SearchBarContainer>
  );
};

export default TopSearchBar;
