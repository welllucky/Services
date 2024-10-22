import { Loading } from "@/components";
import { ISignIn } from "@/types";
import { FormState, UseFormRegister } from "react-hook-form";
import { CreateAccountOption } from "./components/CreateAccountOption";
import { DisplayImage } from "./components/DisplayImage";
import { LoginForm } from "./components/Form";
import { LoginButton } from "./components/Form/LoginButton";
import { ButtonSection, LoginMobile, ScreenContainer } from "./styles";

export interface LoginPageProps {
  register: UseFormRegister<ISignIn>;
  formState: FormState<ISignIn>;
  loginAction: () => void;
}

const LoginPageUI = ({ formState, register, loginAction }: LoginPageProps) => {
  const { isLoading, isValid } = formState;

  return (
    <ScreenContainer>
      {isLoading && <Loading $overlayOn />}
      <LoginMobile>
        <DisplayImage />
        <LoginForm
          formState={formState}
          register={register}
        />
        <ButtonSection>
          <LoginButton
            isDisabled={!isValid}
            callback={loginAction}
          />
          <CreateAccountOption />
        </ButtonSection>
      </LoginMobile>
    </ScreenContainer>
  );
};

export { LoginPageUI };
