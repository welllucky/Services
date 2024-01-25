import styled from "styled-components";

export const Fieldset = styled.fieldset<{
  width?: string;
  height?: string;
  color?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 12px;
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  border-radius: 4px;
  border: 1px solid ${({ theme, color }) => color || theme.colors.neutral["15"]};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  background-color: none;
  overflow-x: hidden;
  overflow-y: auto;
  text-overflow: ellipsis;
  word-break: break-word;
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
