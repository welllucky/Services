import { buildTestIds } from "@/utils/functions";
import { Fieldset, Legend, LegendText } from "./styles";
import { Suspense } from "react";

export type FieldsetProps = {
  children: React.ReactNode;
  labelText: string;
  width?: string;
  height?: string;
  color?: string;
  $hasOverflow?: boolean;
  $justifyContent?: "start" | "center" | "end";
};

const CustomFieldset = ({
  children,
  labelText,
  height,
  width,
  color,
  $hasOverflow = false,
  $justifyContent = "end"
}: FieldsetProps) => {
  return (
    <Fieldset
      {...buildTestIds(`fieldset-container-${labelText}`)}
      width={width}
      height={height}
      color={color}
      $hasOverflow={$hasOverflow}
      $justifyContent={$justifyContent}>
      <Legend {...buildTestIds(`legend-container-${labelText}`)}>
        <LegendText {...buildTestIds(`legend-text-${labelText}`)}>
          {labelText}
        </LegendText>
      </Legend>
      {children}
    </Fieldset>
  );
};

export { CustomFieldset };
