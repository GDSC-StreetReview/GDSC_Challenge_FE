import styled from "styled-components";

export const TopSideToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopSideToggleIconWrapper = styled.div<{ isStay: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 5.75rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  margin-bottom: 1.06rem;
  background: ${({ isStay }) => (isStay ? "#5356FF" : "#89BBF1")};
  cursor: pointer;
`;
export const TopSideToggleIconImg = styled.img<{
  isHeight: number;
  isWidth: number;
}>`
  width: ${(props) => props.isWidth}rem;
  height: ${(props) => props.isHeight}rem;
  margin-left: 0.9rem;
`;

export const TopSideToggleIconText = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Plus Jakarta Sans";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  margin-left: 0.4rem;
`;
