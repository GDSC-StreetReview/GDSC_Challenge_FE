import { useState } from "react";
import { IMAGES } from "src/constants/images";
import { Arrow } from "../arrow/Arrow";
import "./ImageModal.css";
interface ImageModalProps {
  imageList?: string[];
}
export const ImageModal = ({ imageList = [IMAGES.basicImg] }: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX);
  };

  const handleSwipe = (endX: number) => {
    const diffX = startX - endX;
    if (diffX > 50) {
      handlePrevNext(-1);
    } else if (diffX < -50) {
      handlePrevNext(1);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSwipe(e.touches[0].pageX);
  };
  const handlePrevNext = (delta: number) => {
    const newIndex = currentIndex + delta;
    if (newIndex >= 0 && newIndex < imageList.length) setCurrentIndex(newIndex);
  };

  return (
    <div
      className="image__modal__wrapper"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="image__modal__content">
        <img
          src={encodeURI(imageList[currentIndex])}
          alt="contentImg"
          className="image__modal__image"
        />
        <div className="image__modal__control">
          <Arrow onClick={() => handlePrevNext(-1)} isLeft={true} />
          <Arrow onClick={() => handlePrevNext(1)} />
        </div>
      </div>
    </div>
  );
};
