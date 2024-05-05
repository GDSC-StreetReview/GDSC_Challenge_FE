import React, { ReactNode } from "react";

export interface TextProps {
  children?: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
  onClick?: any;
}

export function Text({
  children,
  color = "#FFF",
  fontSize = "0.75rem",
  fontWeight = "700",
  className = "",
  onClick,
}: TextProps) {
  const textStyle: React.CSSProperties = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: "Plus Jakarta Sans",
  };

  return (
    <span style={textStyle} className={className} onClick={onClick}>
      {children}
    </span>
  );
}
