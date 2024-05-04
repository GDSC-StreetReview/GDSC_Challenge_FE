const titleStyle: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Plus Jakarta Sans",
  fontSize: "0.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "0.5rem",
};
const contentStyle: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Plus Jakarta Sans",
  fontSize: "0.75rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

export const BoardTitleText = ({ title }: { title: string }) => {
  return <div style={titleStyle}>{title}</div>;
};

export const BoardContentText = ({ content }: { content: string }) => {
  return <div style={contentStyle}>{content}</div>;
};
