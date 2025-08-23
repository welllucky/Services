"use client";

import { LoginUIProps } from "../Login.types";
import { DisplayImage, LoginForm } from "./components";
import { LoginContainer, ScreenContainer } from "./styles";

const LoginPageUI = ({ formState, control, onAsyncLogin }: LoginUIProps) => {
  return (
    <ScreenContainer>
      <LoginContainer>
        <DisplayImage />
        <LoginForm
          formState={formState}
          control={control}
          onAsyncLogin={onAsyncLogin}
        />
      </LoginContainer>
    </ScreenContainer>
  );
};

export default LoginPageUI;
