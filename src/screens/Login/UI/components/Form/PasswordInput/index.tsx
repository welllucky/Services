import { useCallback, useState } from "react";
import { Control } from "react-hook-form";

import { ClosedEyeIcon, EyeIcon, LockIcon } from "@/assets";
import { CustomInput } from "@/components";

import { LoginInputProps } from "../../../../Login.types";

export const PasswordInput = ({ control }: LoginInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = useCallback(() => {
    setPasswordVisible(!passwordVisible);
  }, [passwordVisible]);

  return (
    <CustomInput
      id="password"
      autoComplete="current-password"
      control={control as unknown as Control}
      type={passwordVisible ? "text" : "password"}
      placeholder="Digite a sua senha"
      trailingButton={
        passwordVisible ? (
          <ClosedEyeIcon
            color="#49454F"
            size={32}
            onClick={handlePasswordVisibility}
          />
        ) : (
          <EyeIcon
            color="#49454F"
            size={32}
            onClick={handlePasswordVisibility}
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
