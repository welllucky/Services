import { buildTestIds } from "@/utils/functions";
import { Fieldset, Legend, LegendText } from "./styles";

export type FieldsetProps = {
  children: React.ReactNode;
  labelText: string;
  width?: string;
  height?: string;
  color?: string;
};

const CustomFieldset = ({
  children,
  labelText,
  height,
  width,
  color
}: FieldsetProps) => {
  return (
    <Fieldset
      {...buildTestIds(`fieldset-container-${labelText}`)}
      width={width}
      height={height}
      color={color}>
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
