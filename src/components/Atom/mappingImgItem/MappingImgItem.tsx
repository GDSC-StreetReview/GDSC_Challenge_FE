import { IMAGES } from "src/constants/images";
import "./MappingImgItem.css";

interface MappingImgItemProps {
  imgUrl: string;
  index: number;
  onClick: (index: number) => void;
}
export const MappingImgItem = ({
  imgUrl,
  index,
  onClick,
}: MappingImgItemProps) => {
  return (
    <div className="mapping__img__item__img">
      <img src={imgUrl} alt={`mapping__img__item__img__${index}`} />
      <div
        className="mapping__img__item__remove"
        onClick={() => onClick(index)}
      >
        <img src={IMAGES.Xicon} alt="X" />
      </div>
    </div>
  );
};
