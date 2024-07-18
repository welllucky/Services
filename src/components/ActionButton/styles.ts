import styled from "styled-components";

export const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: calc(48px * 5);
  gap: 0.5vh;
  /* overflow: hidden; */
`;

export const ActionButtonsContainer = styled.div<{ $isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: ${({ $isVisible }) => ($isVisible ? "8px" : "0px")};
  height: ${({ $isVisible }) => ($isVisible ? "179px" : "0px")};
  gap: 1.2vh;
  overflow: hidden;

  transition: all 0.4s ease-out;
`;
