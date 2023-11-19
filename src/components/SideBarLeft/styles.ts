import styled from "styled-components";

export const ContainerSideBar = styled.div`
  height: 100vh;
  width: 10rem;
  background: #f6f7f7;
  box-shadow: 0px 10px 19px rgba(178, 179, 181, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0em 2em;
`;

export const ContainerIcon = styled.div`
  width: 10rem;
  #active {
    background-color: #e71c35;
  }
`;

export const SpaceIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 100%);
  }
`;
export const ImageIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const IconTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${(props) => props.color};
`;
