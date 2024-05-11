import { ChangeEventHandler } from "react";
import { CustomFieldset } from "@/components/Fieldset";
import { SelectComponent, CustomOption } from "./styles";

interface OptionProps {
  key: string;
  value: string;
  text: string;
  isDisabled?: boolean;
  isSelected?: boolean;
}

interface SelectProps {
  labelText: string;
  width?: string;
  placeholder?: string;
  height?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options?: OptionProps[];
  isRequired?: boolean;
  multiple?: boolean;
  form?: string;
  // name?: string;
  // value?: string;
}

export const CustomSelect = ({
  labelText,
  placeholder = "selecione uma opção",
  width = "100%",
  height = "56px",
  options,
  onChange,
  isRequired = false,
  multiple = false,
  form,
}: SelectProps) => {
  return (
    <CustomFieldset
      width={width}
      height={height}
      labelText={labelText}>
      <SelectComponent
        onChange={onChange}
        required={isRequired}
        name={placeholder}
        multiple={multiple}
        form={form}
        defaultValue={placeholder}>
        <CustomOption value="">
          {placeholder ?? "selecione uma opção abaixo"}
        </CustomOption>
        {options?.map((option) => (
          <CustomOption
            key={option?.key}
            value={option?.value}
            selected={option?.isSelected as boolean}
            disabled={option?.isDisabled as boolean}>
            {option?.text}
          </CustomOption>
        ))}
      </SelectComponent>
    </CustomFieldset>
  );
};
