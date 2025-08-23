import { EmailIcon } from "@/assets";
import { CustomInput } from "@/components";
import { Control } from "react-hook-form";
import { LoginInputProps } from "../../../../Login.types";

export const EmailInput = ({ control }: LoginInputProps) => {
  return (
    <CustomInput
      autoComplete="username"
      control={control as unknown as Control}
      id="email"
      type="email"
      placeholder="Digite o seu email"
      height="58px"
      isRequired
      leadingButton={(
        <EmailIcon
          color="#49454F"
          size={32}
        />
      )}
    />
  );
};
