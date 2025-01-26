import { ClearIcon, EmailIcon } from "@/assets";
import { CustomInput } from "@/components";
import { Control } from "react-hook-form";
import { LoginPageProps } from "../../..";

export const EmailInput = ({ control }: Pick<LoginPageProps, "control">) => {
  return (
    <CustomInput
      control={control as unknown as Control}
      id="email"
      type="email"
      placeholder="Digite o seu email"
      height="58px"
      isRequired
      trailingButton={(
        <ClearIcon
          color="#49454F"
          size={32}
        />
      )}
      leadingButton={(
        <EmailIcon
          color="#49454F"
          size={32}
        />
      )}
    />
  );
};
