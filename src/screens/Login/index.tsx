"use client";

import { useAuth } from "@/utils/providers/AuthProvider";
import toast from "react-hot-toast";
import useLogin from "./Login.hook";
import { LoginPageProps } from "./Login.types";
import LoginPageUI from "./UI";

const LoginPage = ({ searchParams }: LoginPageProps) => {
  const { control, formState, handleAsyncLogin } = useLogin({
    searchParams,
    toast,
    useAuth,
  });

  return (
    <LoginPageUI
      formState={formState}
      control={control}
      onAsyncLogin={handleAsyncLogin}
    />
  );
};

export default LoginPage;
