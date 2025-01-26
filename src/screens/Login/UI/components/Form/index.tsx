import { LoginPageProps } from "../..";
import { EmailInput } from "./EmailInput";
import { ForgotPassword } from "./ForgotPassword";
import { PasswordInput } from "./PasswordInput";
import { FormContainer, InputSection, TextMobile } from "./styles";

export const LoginForm = ({
  control,
}: Pick<LoginPageProps, "control">) => (
  <FormContainer>
    <TextMobile>Entrar</TextMobile>
    <InputSection>
      <EmailInput
        control={control}
      />
      <PasswordInput
        control={control}
      />
    </InputSection>
    <ForgotPassword />
  </FormContainer>
);
