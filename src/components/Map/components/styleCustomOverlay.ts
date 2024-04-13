import styled from "styled-components";

export const CustomOverlayBox = styled.div`
  padding: 0 1rem 1rem 1rem;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.625rem;
  border: 1px solid #378ce7;
`;
export const CustomOverlayBoxCloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: -0.4rem;
`;
export const CustomOverlayBoxTitleWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CustomOverlayBoxTitle = styled.div`
  color: #89bbf1;
  font-size: 1rem;
  font-weight: 700;
`;
export const CustomOverlayBoxAddress = styled.div`
  color: #d9d9d9;
  font-size: 0.65rem;
  font-weight: 500;
`;

export const CustomOverlayBoxIconWrapper = styled.div`
  margin-left: auto;
  color: #000;
  font-size: 0.65rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
export const CustomOverlayBoxIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
`;
export const CustomOverlayBoxTagList = styled.div`
  margin-top: 0.2rem;
  color: #89bbf1;
  font-size: 0.65rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
