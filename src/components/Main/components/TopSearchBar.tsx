import { IMAGES } from "../../../constants/images";
import "./TopSearchBar.css";
const TopSearchBar = () => {
  return (
    // 가로 검색창
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <div className="search-bar-logo">TRIPVIWE</div>
        <input
          className="search-bar"
          id="searchKetword"
          type="text"
          placeholder={"어디로 떠나볼까요?"}
        />
        <img className="search-bar-img" src={IMAGES.searchIcon} alt="돋보기" />
      </div>
    </div>
  );
};

export default TopSearchBar;
