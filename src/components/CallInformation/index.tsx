import { ReactNode } from "react";
import { buildTestIds } from "@/utils";
import { Fieldset, Content, Legend, LegendText } from "./styles";

export interface ILegendProps {
  legendText?: string;
  width?: string;
  // inputType?: string;
  // placeholder?: string;
  height?: string;
  // maxLength?: number;
  children: ReactNode;
}

export const CallInformation = ({
  legendText,
  width,
  height,
  children,
}: Readonly<ILegendProps>) => (
  <Fieldset
    {...buildTestIds("field-set-container")}
    height={height}
    width={width}>
    <Legend {...buildTestIds("legend-container")}>
      <LegendText {...buildTestIds("legend-text")}>{legendText}</LegendText>
    </Legend>
    <Content {...buildTestIds("content-container")}>{children}</Content>
  </Fieldset>
  );
