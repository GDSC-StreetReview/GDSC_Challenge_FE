import { ReactNode } from "react";

export interface BackgroundImgProps {
  children?: ReactNode;
  img: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export function BackgroundImg({
  children,
  className = "",
  img,
  onClick,
}: BackgroundImgProps) {
  console.log("iiiiii",img);
  return (
    <div
      style={{
        background: `url(${encodeURI(img)}) lightgray 50% / cover
  no-repeat`,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
