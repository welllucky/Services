import { LoginFormProps } from "../../../Login.types";
import { ActionSection } from "../../styles";
import CreateAccountOption from "../CreateAccountOption";
import { EmailInput } from "./EmailInput";
import { ForgotPassword } from "./ForgotPassword";
import { LoginButton } from "./LoginButton";
import { PasswordInput } from "./PasswordInput";
import { FormContainer, InputSection, TextMobile } from "./styles";

const LoginForm = ({ control, formState, onAsyncLogin }: LoginFormProps) => (
  <FormContainer>
    <TextMobile>Entrar</TextMobile>
    <InputSection>
      <EmailInput control={control} />
      <PasswordInput control={control} />
    </InputSection>
    <ForgotPassword />
    <ActionSection>
      <LoginButton
        isDisabled={!formState?.isValid}
        onAsyncLogin={onAsyncLogin}
      />
      <CreateAccountOption />
    </ActionSection>
  </FormContainer>
);

export default LoginForm;
