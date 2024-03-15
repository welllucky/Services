import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 93vh;
  gap: 0.4rem;
  padding: 2rem;
`;

export const MainContainer = styled.main<{ $hasContent?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 1rem 0;
  width: 100%;
  height: inherit;
  overflow-y: scroll;
  overflow-x: visible;
  gap: 1rem;
  justify-content: ${({ $hasContent }) => ($hasContent ? "flex-start" : "center")};
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0.8rem 0;
`;

export const SearchPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
