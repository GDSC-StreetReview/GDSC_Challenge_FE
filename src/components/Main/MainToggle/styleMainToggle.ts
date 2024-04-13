import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  right: 2.62rem;
  top: 2.31rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const MenuCircle = styled.div<{ isClick: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background 0.2s ease-in-out, width 0.3s ease-in-out;
  width: ${({ isClick }) => (isClick ? "13.75rem" : "3.375rem")};
  height: ${({ isClick }) => (isClick ? "3.6875rem" : "3.375rem")};
  border-radius: ${({ isClick }) => (isClick ? "2.5rem" : "3.375rem")};
  background: ${({ isClick }) => (isClick ? "#378ce7" : "#fff")};
  margin-bottom: 1.19rem;
`;
export const MenuLoginWapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 2.5rem;
`;
export const MenuCircleImgStyled = styled.img`
  width: 1.26563rem;
  height: 1.26563rem;
  cursor: pointer;
`;

export const GoogleLoginButton = styled.img`
  margin-left: 0.56rem;
  margin-right: 1rem;
  width: 70%;
  border-radius: 2.5rem;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.17);
`;
