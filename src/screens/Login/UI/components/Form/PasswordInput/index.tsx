import { ClosedEyeIcon, EyeIcon, LockIcon } from "@/assets";
import { CustomInput } from "@/components";
import { useState } from "react";
import { LoginPageProps } from "../../..";

export const PasswordInput = ({
  register,
  formState,
}: Omit<LoginPageProps, "loginAction">) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { errors, dirtyFields } = formState;

  const getStatus = () => {
    if (errors?.password || errors.root) return "invalid";
    if (!dirtyFields?.password) return "none";
    return "valid";
  };

  return (
    <CustomInput
      id="password"
      register={register}
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
      $status={getStatus()}
      errorText={errors.password?.message}
    />
  );
};
