import { Loading } from "@/components";
import { ISignIn } from "@/types";
import { Control, FormState } from "react-hook-form";
import { CreateAccountOption } from "./components/CreateAccountOption";
import { DisplayImage } from "./components/DisplayImage";
import { LoginForm } from "./components/Form";
import { LoginButton } from "./components/Form/LoginButton";
import { ActionSection, LoginMobile, ScreenContainer } from "./styles";

export interface LoginPageProps {
  control: Control<ISignIn>;
  formState: FormState<ISignIn>;
  pageIsLoading?: boolean;
  loginAction: () => void;
}

const LoginPageUI = ({
  formState,
  control,
  loginAction,
  pageIsLoading,
}: LoginPageProps) => {
  const { isLoading: formIsLoading, isValid } = formState;

  const isLoading = pageIsLoading || formIsLoading;

  return (
    <ScreenContainer>
      {isLoading && <Loading $overlayOn />}
      <LoginMobile>
        <DisplayImage />
        <LoginForm control={control} />
        <ActionSection>
          <LoginButton
            isDisabled={!isValid}
            callback={loginAction}
          />
          <CreateAccountOption />
        </ActionSection>
      </LoginMobile>
    </ScreenContainer>
  );
};

export { LoginPageUI };
