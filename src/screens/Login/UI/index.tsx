import { useEffect, useMemo } from "react";
import toast from "react-hot-toast";
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

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...");
    }
  }, [isLoading]);

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
