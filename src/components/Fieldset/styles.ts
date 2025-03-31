import styled from "styled-components";

export const FieldSetContent = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  word-break: auto-phrase;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.inverted};
`;

export const Legend = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  background-color: ${({ theme }) => theme.colors.neutral.default};
  display: inline-flex;
  left: 16px;
  padding: 0px 4px;
  top: 8px;
  position: relative;
`;

export const Fieldset = styled.div<{
  color?: string;
  $justifyContent?: "start" | "center" | "end";
}>`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme, color }) => color ?? theme.colors.neutral["15"]};
  color: ${({ theme }) => theme.colors.neutral.inverted};
`;

export const FieldsetContainer = styled.div<{
  color?: string;
  width?: string;
  height?: string;
  padding?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $justifyContent?: "start" | "center" | "end";
  $alignItems?: "start" | "center" | "end";
}>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "100%"};
  min-height: ${({ $minHeight }) => $minHeight};
  max-height: ${({ $maxHeight }) => $maxHeight};

  ${Fieldset} {
    display: flex;
    min-height: ${({ $minHeight }) => $minHeight};
    max-height: ${({ $maxHeight }) => $maxHeight};

    justify-content: ${({ $justifyContent }) => $justifyContent};
    align-items: ${({ $alignItems }) => $alignItems};
  }

  ${FieldSetContent} {
    padding: ${({ padding }) => padding};
    color: ${({ theme }) => theme.colors.neutral["95"]};
  }
`;
