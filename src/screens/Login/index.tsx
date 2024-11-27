"use client";

import { ISignIn, SignInSchema } from "@/types/";
import { useAuth } from "@/utils/providers/AuthProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginPageUI } from "./UI";

export interface LoginPageProps {
  redirectTo?: string;
}

const LoginPage = ({ redirectTo }: LoginPageProps) => {
  const { signIn, isLoading, error, isAuthenticated, user } = useAuth();
  const {
    register,
    formState,
    handleSubmit,
    setError,
    clearErrors,
    resetField,
  } = useForm<ISignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
    resetOptions: {
      keepErrors: false,
    },
    resolver: zodResolver(SignInSchema),
  });

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("root", {
          message: error,
          type: "value",
        });
        toast.error(error);

        setTimeout(() => {
          resetField("password");
          clearErrors("root");
        }, 8000);
      }, 200);
    }
  }, [clearErrors, error, resetField, setError]);

  const loginCallback = handleSubmit(async (data) => {
    try {
      await signIn(data.email, data.password, redirectTo ?? "/");

      if (isAuthenticated) toast.success(`Bem-vindo ${user?.name}!`);
    } catch {
      toast.error("Email ou senha inválidos");
    }
  });

  return (
    <LoginPageUI
      formState={formState}
      register={register}
      loginAction={loginCallback}
      pageIsLoading={isLoading}
    />
  );
};

export { LoginPage };
