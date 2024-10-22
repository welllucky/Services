import { ClearIcon, EmailIcon } from "@/assets";
import { CustomInput } from "@/components";
import { LoginPageProps } from "../../..";

export const EmailInput = ({
  formState,
  register,
}: Omit<LoginPageProps, "loginAction">) => {
  const { errors, dirtyFields } = formState;

  return (
    <CustomInput
      register={register}
      id="email"
      type="email"
      placeholder="Digite o seu email"
      $status={errors?.email ? "invalid" : !dirtyFields?.email ? "none" : "valid"}
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
      errorText={errors.email?.message}
    />
  );
};
