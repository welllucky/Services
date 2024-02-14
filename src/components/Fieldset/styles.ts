import styled from "styled-components";

export const Fieldset = styled.fieldset<{
  width?: string;
  height?: string;
  color?: string;
  $hasOverflow?: boolean;
  $justifyContent?: "start" | "center" | "end";
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  padding: 16px;
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  border-radius: 4px;
  border: 1px solid ${({ theme, color }) => color || theme.colors.neutral["15"]};
  text-overflow: ellipsis;
  line-height: 112%;
  overflow: ${({ $hasOverflow }) => ($hasOverflow ? "scroll" : "hidden")};
  color: ${({ theme }) => theme.colors.neutral["100"]};
`;

export const Legend = styled.legend`
  padding: 0px 4px 0px 4px;
`;

export const LegendText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #2b4417;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FieldsetTextContent = styled.p`
  width: 100%;
  height: fit-content;
`;
