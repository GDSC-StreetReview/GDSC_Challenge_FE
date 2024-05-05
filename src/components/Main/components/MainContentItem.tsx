
interface contentprops {
    content: string;
}
export const MainContentItem = ({content}:contentprops) => {
  return <div className="swipe-menu-wrapper-bottom-content">{content}</div>;
};
