import styled from "styled-components";

export const MainContainer = styled.main<{ $centerContent?: boolean }>`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  width: 100%;
  height: inherit;
  overflow-y: scroll;
  overflow-x: visible;
  gap: 1rem;
  justify-content: ${({ $centerContent }) =>
    ($centerContent ? "center" : "flex-start")};
`;
