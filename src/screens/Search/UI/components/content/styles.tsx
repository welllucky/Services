import styled from "styled-components";

export const MainContainer = styled.div<{ $centerContent?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 0rem 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: ${({ $centerContent }) =>
    ($centerContent ? "center" : "flex-start")};
`;
