import { ReactNode } from "react";

export interface BackgroundImgProps {
  children?: ReactNode;
  img: any;
  className?: string;
  onClick?: any;
}

export function BackgroundImg({ children, className = "", img, onClick }: BackgroundImgProps) {
  return (
    <div
      style={{
        background: `url(${img}) lightgray 50% / cover
  no-repeat`,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
