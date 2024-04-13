import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2.25rem;
  z-index: 100;
  overflow: hidden;
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 37.3125rem;
  height: 3.25rem;
  border-radius: 1.875rem;
  background: linear-gradient(90deg, #fff 0%, #378ce7 100%);
`;
export const SearchBarLogo = styled.div`
  text-align: center;
  width: auto;
  height: 1.4375rem;
  color: #378ce7;
  font-family: "Plus Jakarta Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-left:1.5rem;
  margin-right: auto;
`;
export const SearchBar = styled.input`
  width: 25.1875rem;
  height: 2.6875rem;
  border-radius: 1.875rem;
  background: #fff;
  border: none;
  outline: none;
  color: rgba(55, 140, 231, 0.48);
  font-family: "Plus Jakarta Sans";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 1.56rem;

  &::placeholder {
    color: rgba(55, 140, 231, 0.48);
  }
`;
export const SearchBarImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-right:1.31rem;
  margin-left: auto;
`;
