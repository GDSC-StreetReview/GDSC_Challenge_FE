import { IMAGES } from "src/constants/images";

interface arrowProps {
  onClick: () => void;
  width?: string;
  height?: string;
  isLeft?: boolean;
}

export const Arrow = ({
  onClick,
  width = "0.875rem",
  height = "1.64063rem",
  isLeft = false,
}: arrowProps) => {
  const style: React.CSSProperties = {
    transform: isLeft ? "rotate(180deg)" : "",
    width: width,
    height: height,
    cursor: "pointer",
  };
  return (
    <div onClick={onClick}>
      <img src={IMAGES.arrowRight} alt="arrowLeft" style={style} />
    </div>
  );
};
