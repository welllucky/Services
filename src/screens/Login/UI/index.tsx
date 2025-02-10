import { useMemo } from "react";
import { LoginUIProps } from "../Login.types";
import { DisplayImage } from "./components/DisplayImage";
import { LoginForm } from "./components/Form";
import { LoginMobile, ScreenContainer } from "./styles";

const LoginPageUI = ({
  formState,
  control,
  loginAction,
  pageIsLoading,
}: LoginUIProps) => {
  const { isLoading: formIsLoading, isValid } = formState;

  const isLoading = useMemo(
    () => pageIsLoading || formIsLoading,
    [formIsLoading, pageIsLoading],
  );

  return (
    <ScreenContainer>
      <LoginMobile>
        <DisplayImage />
        <LoginForm
          control={control}
          isValid={isValid && !isLoading}
          loginAction={loginAction}
        />
      </LoginMobile>
    </ScreenContainer>
  );
};

export { LoginPageUI };
