import { ClosedEyeIcon, EyeIcon, LockIcon } from "@/assets";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Control } from "react-hook-form";
import { LoginPageProps } from "../../..";

export const PasswordInput = ({ control }: Pick<LoginPageProps, "control">) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <CustomInput
      id="password"
      control={control as unknown as Control}
      type={passwordVisible ? "text" : "password"}
      placeholder="Digite a sua senha"
      trailingButton={
        passwordVisible ? (
          <ClosedEyeIcon
            color="#49454F"
            size={32}
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        ) : (
          <EyeIcon
            color="#49454F"
            size={32}
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        )
      }
      leadingButton={(
        <LockIcon
          color="#49454F"
          size={32}
        />
      )}
      height="58px"
    />
  );
};
