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
    <Fieldset width={width} height={height} color={color}>
      <Legend>
        <LegendText>{labelText}</LegendText>
      </Legend>
      {children}
    </Fieldset>
  );
};

export { CustomFieldset };
