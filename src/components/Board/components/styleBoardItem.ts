import styled from "styled-components";

export const BoardItemBackGournd = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
export const BoardItemBackBox = styled.div<{ background: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28.875rem;
  height: 37.4375rem;
  border-radius: 1.25rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.background}) lightgray 50% / cover
    no-repeat;
`;

export const BoardItemTop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 1.38rem;
  margin-top: 1rem;
`;
export const BoardItemBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 1.38rem;
`;

export const BoardItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
export const BoardItemMenuBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const BoardItemBottomInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 0.62rem 1.38rem;

  flex-direction: column;
`;
export const BoardItemTagBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
`;
export const BoardItemAddreessBox = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardItemUserInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

export const BoardItemUserInfoProflie = styled.div<{ proflie?: string }>`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background: url(${(props) => props.proflie}) lightgray 50% / cover no-repeat;
`;
export const BoardItemUserInfoName = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Plus Jakarta Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 0.5rem;
`;
