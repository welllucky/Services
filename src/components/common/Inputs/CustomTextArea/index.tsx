/* eslint-disable no-nested-ternary */
import { ErrorText, WarningText } from "@/components";
import { InputComponentsProps } from "@/types";
import { ChangeEvent } from "react";
import { CustomFieldset } from "../../../Fieldset";
import { TextArea, TextAreaContainer } from "./styles";

export interface TextAreaProps extends InputComponentsProps {
  /**
   * Function triggered on text area value change
   */
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * CustomTextArea component
 *
 * @description A customizable text area with validation and dynamic styles.
 *
 * @param {TextAreaProps} props - Properties for the text area component.
 * @param {string} props.id - The unique identifier for the text area.
 * @param {string} props.labelText - The label displayed above the text area.
 * @param {string} [props.placeholder] - Placeholder text displayed inside the text area.
 * @param {string} [props.width="100%"] - Width of the text area container.
 * @param {string} [props.height="160px"] - Height of the text area.
 * @param {string} [props.value] - The current value of the text area.
 * @param {boolean} [props.isRequired=false] - Whether the text area is required.
 * @param {string} [props.$status="none"] - Validation status of the text area ("none", "invalid", "warning").
 * @param {string} [props.errorText] - Error message displayed when status is invalid.
 * @param {string} [props.warnText] - Warning message displayed when status is warning.
 *
 * @example
 * <CustomTextArea
 *   id="description"
 *   labelText="Description"
 *   placeholder="Type your description here"
 *   value={description}
 *   onChange={(e) => setDescription(e.target.value)}
 *   isRequired={true}
 *   $status="none"
 * />
 */
export const CustomTextArea = ({
  id,
  labelText,
  placeholder,
  width = "100%",
  height = "160px",
  value,
  onChange,
  isRequired = false,
  register,
  registerOptions,
  $status = "none",
  errorText,
  warnText,
}: TextAreaProps) => (
  <TextAreaContainer $status={$status}>
    <CustomFieldset
      width={width}
      $minHeight={height}
      $maxHeight=""
      $hasOverflow
      labelText={labelText ?? ""}>
      <TextArea
        {...register(id, {
          ...registerOptions,
          required: isRequired
            ? "This field is required"
            : registerOptions?.required
              ? registerOptions?.required
              : false,
          onChange: (e) => {
            if (onChange) onChange(e);
            if (registerOptions?.onChange) registerOptions.onChange(e);
          },
        })}
        height={height}
        width="100%"
        placeholder={placeholder}
        value={value}
      />
    </CustomFieldset>
    {$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
    {$status === "warning" && <WarningText>{warnText}</WarningText>}
  </TextAreaContainer>
);
