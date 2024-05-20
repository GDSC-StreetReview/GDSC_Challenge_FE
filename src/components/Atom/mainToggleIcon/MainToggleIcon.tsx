import "./MainToggleIcon.css";
interface MainToggleIconProps {
  onClick?: () => void;
  imgSrc: string;
  clasName?: string;
}
const MainToggleIcon = ({
  imgSrc,
  onClick,
  clasName = "menu-circle-img-style",
}: MainToggleIconProps) => {
  return <img className={clasName} onClick={onClick} src={imgSrc} alt="Icon" />;
};

export default MainToggleIcon;
