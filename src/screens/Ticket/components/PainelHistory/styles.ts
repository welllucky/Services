import styled from "styled-components";

export const InfoHistoryPainelContainer = styled.section<{
  $hasContent?: boolean;
}>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ $hasContent }) => ($hasContent ? "24px" : "36px")};
  padding: 12px 0px;
`;

export const InfoHistoryPainelTitle = styled.h2`
  font-size: 1.2rem;
`;

export const InfoHistoryPainelContent = styled.div`
flex-direction: column;
  max-height: 258px;
  gap: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: center;
  display: flex;
`;
