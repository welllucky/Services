import styled from "styled-components";

import { theme } from "@/styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* width: fit-content;
  height: fit-content; */
`;

export const Title = styled.h2<{ color?: string }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ color }) => color || theme.colors.neutral.inverted};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: fit-content;
`;
