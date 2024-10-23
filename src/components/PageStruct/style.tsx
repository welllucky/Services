import { Column } from "@/styles";
import styled from "styled-components";

export const FlexContainer = styled(Column)<{ $backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8vw;
  gap: 8px;
  overflow: hidden;
  padding-bottom: 82px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#fff"};
`;

export const PageStructContainer = styled(Column)`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;
