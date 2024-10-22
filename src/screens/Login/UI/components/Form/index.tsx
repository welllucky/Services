import { LoginPageProps } from "../..";
import { EmailInput } from "./EmailInput";
import { ForgotPassword } from "./ForgotPassword";
import { PasswordInput } from "./PasswordInput";
import { FormContainer, InputSection, TextMobile } from "./styles";

export const LoginForm = ({
  formState,
  register,
}: Omit<LoginPageProps, "loginAction">) => (
  <FormContainer>
    <TextMobile>Entrar</TextMobile>
    <InputSection>
      <EmailInput
        formState={formState}
        register={register}
      />
      <PasswordInput
        formState={formState}
        register={register}
      />
    </InputSection>
    <ForgotPassword />
  </FormContainer>
);
